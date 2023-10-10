
        function createCalendar(year, month) {
            const calendar = document.getElementById('calendar');
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const table = document.createElement('table');
            const headerRow = table.insertRow();
            
            // Create table headers for days of the week
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (const day of daysOfWeek) {
                const th = document.createElement('th');
                th.textContent = day;
                headerRow.appendChild(th);
            }

            let date = new Date(year, month, 1);
            let dayOfWeek = date.getDay();

            const tbody = document.createElement('tbody');
            table.appendChild(tbody);

            // Create calendar cells
            for (let day = 1; day <= daysInMonth; day++) {
                if (dayOfWeek === 0) {
                    var row = tbody.insertRow();
                }
                const cell = row.insertCell();
                cell.textContent = day;
                dayOfWeek = (dayOfWeek + 1) % 7;
            }

            calendar.innerHTML = '';
            calendar.appendChild(table);
        }

        // Get the current date
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        createCalendar(currentYear, currentMonth);