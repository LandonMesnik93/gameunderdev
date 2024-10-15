        // Set the target launch date
        const launchDate = new Date('October 21, 2024 00:00:00').getTime();

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = launchDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById('countdown').innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the countdown is over
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').innerHTML = "The game is here!";
            }
        }, 1000);
