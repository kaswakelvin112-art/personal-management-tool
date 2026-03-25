// Complete schedule data with all days
      let scheduleData = []

      function getDefaultScheduleData() {
        return [
        // Monday
        {
          Day: "Monday",
          StartTime: "05:30",
          EndTime: "06:00",
          Activity: "Wake up and preparation",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "AI Mathematics (Linear Algebra)",
          Notes: "Focus on matrix operations",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "07:00",
          EndTime: "08:00",
          Activity: "Breakfast and preparation",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "08:00",
          EndTime: "09:00",
          Activity: "Revising SDP",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "09:00",
          EndTime: "10:00",
          Activity: "Software Development Principles Class",
          Notes: "Lecture in room 1A",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "10:00",
          EndTime: "13:00",
          Activity: "Study / Additional class work",
          Notes: "Review notes",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "13:00",
          EndTime: "14:00",
          Activity: "Lunch and rest",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "14:00",
          EndTime: "16:00",
          Activity: "Review lecture notes",
          Notes: "Focus on key concepts",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "Machine Learning study",
          Notes: "Practice algorithms",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "Relax",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Programming project",
          Notes: "Work on assignment",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Wealth and motivation reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Monday",
          StartTime: "22:00",
          EndTime: "05:30",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Tuesday
        {
          Day: "Tuesday",
          StartTime: "05:30",
          EndTime: "06:00",
          Activity: "Wake up",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "Probability for AI",
          Notes: "Study distributions",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "07:00",
          EndTime: "08:00",
          Activity: "Breakfast",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "08:00",
          EndTime: "10:00",
          Activity: "Numerical Analysis Class",
          Notes: "Online",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "10:00",
          EndTime: "12:00",
          Activity: "Data and Information Management Class",
          Notes: "Take notes",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "12:00",
          EndTime: "14:00",
          Activity: "Lunch and rest",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "14:00",
          EndTime: "16:00",
          Activity: "Programming practice",
          Notes: "Code challenges",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "Machine Learning exercises",
          Notes: "Work on problems",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Web development practice",
          Notes: "Build components",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Wealth reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Tuesday",
          StartTime: "22:00",
          EndTime: "05:30",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Wednesday
        {
          Day: "Wednesday",
          StartTime: "05:30",
          EndTime: "06:00",
          Activity: "Wake up",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "Machine Learning theory",
          Notes: "Read papers",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "07:00",
          EndTime: "08:00",
          Activity: "Breakfast",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "08:00",
          EndTime: "11:00",
          Activity: "Numerical Analysis Class",
          Notes: "Attend lecture",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "11:00",
          EndTime: "13:00",
          Activity: "Study time",
          Notes: "Review materials",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "13:00",
          EndTime: "14:00",
          Activity: "Lunch",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "14:00",
          EndTime: "16:00",
          Activity: "Mathematics practice",
          Notes: "Solve problems",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "Deep Learning introduction",
          Notes: "Study neural networks",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Coding project",
          Notes: "Continue development",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Motivation reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Wednesday",
          StartTime: "22:00",
          EndTime: "05:30",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Thursday
        {
          Day: "Thursday",
          StartTime: "05:30",
          EndTime: "06:00",
          Activity: "Wake up",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "AI Mathematics",
          Notes: "Practice",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "07:00",
          EndTime: "08:00",
          Activity: "Breakfast",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "08:00",
          EndTime: "11:00",
          Activity: "Data and Information Management Class",
          Notes: "Attend",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "11:00",
          EndTime: "13:00",
          Activity: "Study",
          Notes: "Review",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "13:00",
          EndTime: "14:00",
          Activity: "Lunch",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "14:00",
          EndTime: "16:00",
          Activity: "OOP revision",
          Notes: "Practice concepts",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "Deep Learning practice",
          Notes: "Implement models",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Self-manager project",
          Notes: "Build features",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Thursday",
          StartTime: "22:00",
          EndTime: "05:30",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Friday
        {
          Day: "Friday",
          StartTime: "05:30",
          EndTime: "06:00",
          Activity: "Wake up",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "Machine Learning study",
          Notes: "Review week",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "07:00",
          EndTime: "08:00",
          Activity: "Breakfast",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "08:00",
          EndTime: "11:00",
          Activity: "Web Development Class",
          Notes: "Attend",
          Category: "Class",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "11:00",
          EndTime: "13:00",
          Activity: "Study",
          Notes: "Practice",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "13:00",
          EndTime: "14:00",
          Activity: "Lunch",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "14:00",
          EndTime: "16:00",
          Activity: "OOP practice",
          Notes: "Coding",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "AI experiments",
          Notes: "Try new things",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Weekly revision",
          Notes: "Review all subjects",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Wealth reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Friday",
          StartTime: "22:00",
          EndTime: "05:30",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Saturday
        {
          Day: "Saturday",
          StartTime: "06:00",
          EndTime: "08:00",
          Activity: "AI learning",
          Notes: "Self-study",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "08:00",
          EndTime: "12:00",
          Activity: "Project building",
          Notes: "Main project",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "12:00",
          EndTime: "14:00",
          Activity: "Rest",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "14:00",
          EndTime: "18:00",
          Activity: "Continue projects",
          Notes: "Keep coding",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Coding practice",
          Notes: "Challenges",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Saturday",
          StartTime: "22:00",
          EndTime: "06:00",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        },

        // Sunday
        {
          Day: "Sunday",
          StartTime: "06:00",
          EndTime: "07:00",
          Activity: "Reflection",
          Notes: "Plan week",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "07:00",
          EndTime: "09:00",
          Activity: "Church",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "09:00",
          EndTime: "12:00",
          Activity: "Light revision",
          Notes: "Easy study",
          Category: "Study",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "12:00",
          EndTime: "16:00",
          Activity: "Rest",
          Notes: "Relax",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "16:00",
          EndTime: "18:00",
          Activity: "Plan next week",
          Notes: "Organize",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "18:00",
          EndTime: "19:00",
          Activity: "Break",
          Notes: "",
          Category: "Break",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "19:00",
          EndTime: "21:00",
          Activity: "Coding practice",
          Notes: "Prepare for week",
          Category: "Project",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "21:00",
          EndTime: "22:00",
          Activity: "Reading",
          Notes: "",
          Category: "Other",
          EnableReminder: true,
        },
        {
          Day: "Sunday",
          StartTime: "22:00",
          EndTime: "06:00",
          Activity: "Sleep",
          Notes: "",
          Category: "Sleep",
          EnableReminder: false,
        }
      ]
    }

    (function initializeData() {
      try {
        const savedData = localStorage.getItem('scheduleData');
        if (savedData) {
          scheduleData = JSON.parse(savedData);
          console.log('Data loaded from localStorage');
        } else {
          // Only use default data if nothing is saved
          scheduleData = getDefaultScheduleData();
          console.log('Using default schedule data');
          saveToLocalStorage();
          showNotificationPanel('Using default schedule data');
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error);
        scheduleData = getDefaultScheduleData();
      }
    })();

            // Load saved data
      // Save function
      function saveToLocalStorage() {
        try {
          localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
          console.log('Data saved successfully!');
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      }
      // Reminder history
      let reminderHistory = [];

      // Notification sound
      const notificationSound = new Audio(
        "data:audio/wav;base64,UklGRlwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVoAAACAgICAf39/f39/f3+AgICAf39/f39/f3+AgICAf39/f39/f3+AgICAf39/f39/f3+AgICAf39/f39/f3+AgICAf39/f3+AgIA=",
      );

      // Initialize app
      window.onload = () => {
        
        renderTable();
        updateAnalytics();
        updateJSONEditor();
        startLiveUpdates();
        checkNotificationPermission();
        updateCurrentTime();
        setInterval(updateCurrentTime, 1000);

        // Load reminder history from localStorage
        const savedHistory = localStorage.getItem("reminderHistory");
        if (savedHistory) {
          try {
            reminderHistory = JSON.parse(savedHistory);
          } catch (e) {
            console.log("Error loading reminder history:", e);
          }
        }
      };

      // Update current time
      function updateCurrentTime() {
        const now = new Date();
        document.getElementById("currentTime").textContent =
          now.toLocaleTimeString();
      }

      // Check notification permission
      function checkNotificationPermission() {
        if ("Notification" in window) {
          if (Notification.permission === "granted") {
            document.getElementById("permissionRequest").style.display = "none";
          } else if (Notification.permission !== "denied") {
            document.getElementById("permissionRequest").style.display = "flex";
          }
        }
      }

      // Request notification permission
      function requestNotificationPermission() {
        if ("Notification" in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              document.getElementById("permissionRequest").style.display =
                "none";
              showBrowserNotification(
                "✅ Notifications enabled!",
                "You will now receive activity reminders.",
              );
            }
          });
        }
      }

      // Show browser notification
      function showBrowserNotification(title, body) {
        if (
          "Notification" in window &&
          Notification.permission === "granted" &&
          document.getElementById("showNotifications").checked
        ) {
          try {
            const notification = new Notification(title, {
              body: body,
              icon: "",
              silent: !document.getElementById("enableSound").checked,
            });

            if (document.getElementById("enableSound").checked) {
              notificationSound
                .play()
                .catch((e) => console.log("Sound play failed:", e));
            }

            setTimeout(() => notification.close(), 5000);
          } catch (e) {
            console.log("Notification error:", e);
          }
        }
      }

      // Live updates
      function startLiveUpdates() {
        updateLiveActivity();
        setInterval(updateLiveActivity, 1000);
        setInterval(checkReminders, 10000); // Check reminders every 10 seconds
      }

      // Get current day
      function getCurrentDay() {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return days[new Date().getDay()];
      }

      // Get next day
      function getNextDay(day) {
        const days = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        const index = days.indexOf(day);
        return days[(index + 1) % 7];
      }

      // Update live activity and countdown
      function updateLiveActivity() {
        const now = new Date();
        const currentDay = getCurrentDay();
        const currentTime =
          now.getHours().toString().padStart(2, "0") +
          ":" +
          now.getMinutes().toString().padStart(2, "0");

        // Sort activities by time for the current day
        const dayActivities = scheduleData
          .filter((item) => item.Day === currentDay)
          .sort((a, b) => a.StartTime.localeCompare(b.StartTime));

        let currentActivity = null;
        let nextActivity = null;

        for (let i = 0; i < dayActivities.length; i++) {
          const activity = dayActivities[i];

          // Handle overnight activities
          if (activity.StartTime > activity.EndTime) {
            if (
              currentTime >= activity.StartTime ||
              currentTime < activity.EndTime
            ) {
              currentActivity = activity;
              break;
            }
          } else {
            if (
              currentTime >= activity.StartTime &&
              currentTime < activity.EndTime
            ) {
              currentActivity = activity;
              break;
            }
          }
        }

        // Find next activity
        if (!currentActivity) {
          for (let i = 0; i < dayActivities.length; i++) {
            if (dayActivities[i].StartTime > currentTime) {
              nextActivity = dayActivities[i];
              break;
            }
          }
        }

        // Update UI
        if (currentActivity) {
          document.getElementById("currentActivity").textContent =
            currentActivity.Activity;

          // Calculate time remaining
          const endTime = currentActivity.EndTime;
          const endDateTime = new Date();
          const [endHours, endMinutes] = endTime.split(":").map(Number);
          endDateTime.setHours(endHours, endMinutes, 0);

          if (
            endHours < now.getHours() ||
            (endHours === now.getHours() && endMinutes < now.getMinutes())
          ) {
            endDateTime.setDate(endDateTime.getDate() + 1);
          }

          const timeRemaining = endDateTime - now;
          if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / 3600000);
            const minutes = Math.floor((timeRemaining % 3600000) / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
            document.getElementById("countdownTimer").textContent =
              `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            // Show warning when 5 minutes remaining
            if (timeRemaining <= 300000 && timeRemaining > 290000) {
              showNotificationPanel(
                `⚠️ 5 minutes remaining for: ${currentActivity.Activity}`,
              );
            }
          } else {
            document.getElementById("countdownTimer").textContent = "00:00:00";
          }
        } else {
          document.getElementById("currentActivity").textContent =
            "No current activity";
          document.getElementById("countdownTimer").textContent = "--:--:--";
        }

        // Update next activity
        if (nextActivity) {
          document.getElementById("nextActivityName").textContent =
            nextActivity.Activity;
          document.getElementById("nextActivityTime").textContent =
            nextActivity.StartTime;

          // Show countdown to next activity
          const nextStart = nextActivity.StartTime;
          const [nextHours, nextMinutes] = nextStart.split(":").map(Number);
          const nextDateTime = new Date();
          nextDateTime.setHours(nextHours, nextMinutes, 0);

          if (
            nextHours < now.getHours() ||
            (nextHours === now.getHours() && nextMinutes < now.getMinutes())
          ) {
            nextDateTime.setDate(nextDateTime.getDate() + 1);
          }

          const timeToNext = nextDateTime - now;
          if (timeToNext > 0 && timeToNext <= 300000) {
            document.getElementById("nextActivity").style.background =
              "#fef3c7";
            document.getElementById("nextActivity").style.border =
              "2px solid #f59e0b";
          } else {
            document.getElementById("nextActivity").style.background = "";
            document.getElementById("nextActivity").style.border = "none";
          }
        } else {
          // Find first activity of next day
          const nextDay = getNextDay(currentDay);
          const nextDayActivities = scheduleData.filter(
            (item) => item.Day === nextDay,
          );
          if (nextDayActivities.length > 0) {
            const firstActivity = nextDayActivities.sort((a, b) =>
              a.StartTime.localeCompare(b.StartTime),
            )[0];
            document.getElementById("nextActivityName").textContent =
              firstActivity.Activity;
            document.getElementById("nextActivityTime").textContent =
              `${nextDay} ${firstActivity.StartTime}`;
          }
        }

        // Highlight rows
        highlightCurrentAndNextRows(currentActivity);
      }

      // Check for reminders
      function checkReminders() {
        if (!document.getElementById("enableReminders").checked) return;

        const now = new Date();
        const currentDay = getCurrentDay();
        const reminderMinutes = parseInt(
          document.getElementById("reminderTime").value,
        );

        scheduleData.forEach((item) => {
          if (item.Day === currentDay && item.EnableReminder) {
            // Calculate reminder time
            const [startHours, startMinutes] =
              item.StartTime.split(":").map(Number);
            const reminderDateTime = new Date();
            reminderDateTime.setHours(
              startHours,
              startMinutes - reminderMinutes,
              0,
            );

            // Check if it's time for reminder (within the last minute)
            if (
              now >= reminderDateTime &&
              now < new Date(reminderDateTime.getTime() + 60000)
            ) {
              // Check if already notified using a unique key
              const reminderKey = `${item.Day}_${item.StartTime}_${item.Activity}`;

              // Check if we've already sent this reminder
              if (!localStorage.getItem(reminderKey)) {
                // Show reminder notification
                showReminderNotification(item, reminderMinutes);

                // Save to reminder history
                reminderHistory.unshift({
                  id: Date.now(),
                  activity: item.Activity,
                  day: item.Day,
                  time: item.StartTime,
                  reminderTime: reminderMinutes,
                  timestamp: new Date().toLocaleString(),
                  acknowledged: false,
                });

                // Keep only last 50 reminders
                if (reminderHistory.length > 50) {
                  reminderHistory.pop();
                }

                // Save to localStorage
                localStorage.setItem(
                  "reminderHistory",
                  JSON.stringify(reminderHistory),
                );

                // Mark as notified in localStorage
                localStorage.setItem(reminderKey, "true");

                // Remove after 24 hours
                setTimeout(
                  () => {
                    localStorage.removeItem(reminderKey);
                  },
                  48 * 60 * 60 * 1000,
                );

                // Update reminder history view if visible
                updateReminderHistory();
              }
            }
          }
        });
      }

      // Show reminder notification
      function showReminderNotification(activity, minutesBefore) {
        const message = `⏰ Reminder: "${activity.Activity}" starts in ${minutesBefore} minutes at ${activity.StartTime}`;

        // Show browser notification
        showBrowserNotification("Schedule Reminder", message);

        // Show in-app notification
        showNotificationPanel(message);

        // Play sound if enabled
        if (document.getElementById("enableSound").checked) {
          playNotificationSound();
        }
      }

      // Show notification panel
      function showNotificationPanel(message) {
        const panel = document.getElementById("notificationPanel");
        const text = document.getElementById("notificationText");

        text.textContent = message;
        panel.style.display = "flex";
        panel.style.opacity = "1";

        // Auto-hide after 10 seconds
        setTimeout(() => {
          panel.style.opacity = "0";
          setTimeout(() => {
            panel.style.display = "none";
            panel.style.opacity = "1";
          }, 500);
        }, 10000);
      }

      // Dismiss notification
      function dismissNotification() {
        const panel = document.getElementById("notificationPanel");
        panel.style.opacity = "0";
        setTimeout(() => {
          panel.style.display = "none";
          panel.style.opacity = "1";
        }, 500);
      }

      // Play notification sound
      function playNotificationSound() {
        try {
          // Create a simple beep sound
          const audioContext = new (
            window.AudioContext || window.webkitAudioContext
          )();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
          console.log("Sound play failed:", e);
        }
      }

      // Update reminder history view
      function updateReminderHistory() {
        const historyContainer = document.getElementById("reminderHistory");
        if (!historyContainer) return;

        if (reminderHistory.length === 0) {
          historyContainer.innerHTML =
            '<p style="text-align: center; padding: 20px;">No reminders yet</p>';
          return;
        }

        let html = "<table><thead><tr>";
        html += "<th>Time</th>";
        html += "<th>Activity</th>";
        html += "<th>Day</th>";
        html += "<th>Start Time</th>";
        html += "<th>Reminder</th>";
        html += "<th>Status</th>";
        html += "</tr></thead><tbody>";

        reminderHistory.forEach((reminder) => {
          html += "<tr>";
          html += `<td>${reminder.timestamp}</td>`;
          html += `<td>${reminder.activity}</td>`;
          html += `<td>${reminder.day}</td>`;
          html += `<td>${reminder.time}</td>`;
          html += `<td>${reminder.reminderTime} min before</td>`;
          html += `<td>${reminder.acknowledged ? "✅ Seen" : "⏳ Pending"}</td>`;
          html += "</tr>";
        });

        html += "</tbody></table>";
        historyContainer.innerHTML = html;
      }

      // Clear reminder history
      function clearReminderHistory() {
        if (confirm("Clear all reminder history?")) {
          reminderHistory = [];
          localStorage.setItem(
            "reminderHistory",
            JSON.stringify(reminderHistory),
          );
          updateReminderHistory();
          showNotificationPanel("✅ Reminder history cleared");
        }
      }

      // Toggle reminders
      function toggleReminders() {
        if (document.getElementById("enableReminders").checked) {
          showNotificationPanel("✅ Reminders enabled");
        } else {
          showNotificationPanel("❌ Reminders disabled");
        }
      }

      // Update reminder settings
      function updateReminderSettings() {
        showNotificationPanel(
          `⏰ Reminder time updated to ${document.getElementById("reminderTime").value} minutes before`,
        );
      }

      // Switch between views
      function switchView(viewName) {
        // Update navigation buttons
        document
          .querySelectorAll(".nav-btn")
          .forEach((btn) => btn.classList.remove("active"));
        event.target.classList.add("active");

        // Update views
        document
          .querySelectorAll(".view-section")
          .forEach((section) => section.classList.remove("active"));
        document.getElementById(viewName + "View").classList.add("active");

        // Refresh data if needed
        if (viewName === "analytics") {
          updateAnalytics();
        } else if (viewName === "table") {
          renderTable();
        } else if (viewName === "json") {
          updateJSONEditor();
        } else if (viewName === "reminders") {
          updateReminderHistory();
        }
      }

      // Render table
      function renderTable() {
        const searchTerm =
          document.getElementById("searchInput")?.value.toLowerCase() || "";
        const dayFilter = document.getElementById("dayFilter")?.value || "";

        let filteredData = scheduleData.filter((item) => {
          const matchesSearch =
            item.Activity.toLowerCase().includes(searchTerm) ||
            (item.Notes && item.Notes.toLowerCase().includes(searchTerm));
          const matchesDay = !dayFilter || item.Day === dayFilter;
          return matchesSearch && matchesDay;
        });

        let tableHTML = "<table><thead><tr>";
        tableHTML +=
          '<th onclick="sortTable(\'Day\')">Day <span class="sort-icon">↕️</span></th>';
        tableHTML +=
          '<th onclick="sortTable(\'StartTime\')">Start <span class="sort-icon">↕️</span></th>';
        tableHTML +=
          '<th onclick="sortTable(\'EndTime\')">End <span class="sort-icon">↕️</span></th>';
        tableHTML +=
          '<th onclick="sortTable(\'Activity\')">Activity <span class="sort-icon">↕️</span></th>';
        tableHTML += "<th>Category</th>";
        tableHTML += "<th>Notes</th>";
        tableHTML += "<th>Actions</th>";
        tableHTML += "</tr></thead><tbody>";

        filteredData.forEach((item, index) => {
          const originalIndex = scheduleData.indexOf(item);
          tableHTML += "<tr>";
          tableHTML += `<td>${item.Day}</td>`;
          tableHTML += `<td>${item.StartTime}</td>`;
          tableHTML += `<td>${item.EndTime}</td>`;
          tableHTML += `<td>${item.Activity}</td>`;
          tableHTML += `<td><span style="background: ${getCategoryColor(item.Category)}; padding: 3px 8px; border-radius: 15px; color: white;">${item.Category || "Other"}</span></td>`;
          tableHTML += `<td class="activity-notes">${item.Notes || ""}</td>`;
          tableHTML += `<td>
                    <button class="btn btn-primary" style="padding: 5px 10px;" onclick="editActivity(${originalIndex})">Edit</button>
                    <button class="btn btn-danger" style="padding: 5px 10px;" onclick="deleteActivity(${originalIndex})">Delete</button>
                </td>`;
          tableHTML += "</tr>";
        });

        tableHTML += "</tbody></table>";
        document.getElementById("tableContainer").innerHTML = tableHTML;

        // Re-highlight current activity
        updateLiveActivity();
      }

      // Get color for category
      function getCategoryColor(category) {
        const colors = {
          Study: "#4299e1",
          Class: "#9f7aea",
          Break: "#48bb78",
          Sleep: "#667eea",
          Project: "#ed8936",
          Other: "#a0aec0",
        };
        return colors[category] || "#a0aec0";
      }

      // Filter table
      function filterTable() {
        renderTable();
      }

      // Sort table
      let sortDirection = {};
      function sortTable(column) {
        sortDirection[column] = !sortDirection[column];

        scheduleData.sort((a, b) => {
          if (a[column] < b[column]) return sortDirection[column] ? -1 : 1;
          if (a[column] > b[column]) return sortDirection[column] ? 1 : -1;
          return 0;
        });

        renderTable();
      }

      // Update analytics
      function updateAnalytics() {
        // Calculate statistics
        const totalActivities = scheduleData.length;
        const uniqueDays = [...new Set(scheduleData.map((item) => item.Day))] //assures a single copy
          .length;

        // Category distribution
        const categories = {};
        scheduleData.forEach((item) => {
          const cat = item.Category || "Other";
          categories[cat] = (categories[cat] || 0) + 1;
        });

        // Activities per day
        const perDay = {};
        scheduleData.forEach((item) => {
          perDay[item.Day] = (perDay[item.Day] || 0) + 1;
        });

        // Update stats cards
        document.getElementById("statsContainer").innerHTML = `
                <div class="stat-card">
                    <h3>Total Activities</h3>
                    <div class="stat-value">${totalActivities}</div>
                </div>
                <div class="stat-card">
                    <h3>Days Covered</h3>
                    <div class="stat-value">${uniqueDays}</div>
                </div>
                <div class="stat-card">
                    <h3>Categories</h3>
                    <div class="stat-value">${Object.keys(categories).length}</div>
                </div>
                <div class="stat-card">
                    <h3>Avg Activities/Day</h3>
                    <div class="stat-value">${(totalActivities / uniqueDays).toFixed(1)}</div>
                </div>
            `;

        // Update day chart
        let dayChartHTML = "";
        const days = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        const maxPerDay = Math.max(...Object.values(perDay), 1);

        days.forEach((day) => {
          const count = perDay[day] || 0;
          const percentage = (count / maxPerDay) * 100;
          dayChartHTML += `
                    <div class="day-bar">
                        <span class="day-label">${day}</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${percentage}%">${count} activities</div>
                        </div>
                    </div>
                `;
        });
        document.getElementById("dayChart").innerHTML = dayChartHTML;

        // Update activity chart (top categories)
        let activityChartHTML = "";
        const sortedCategories = Object.entries(categories)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);

        const maxCategory =
          sortedCategories.length > 0 ? sortedCategories[0][1] : 1;
        sortedCategories.forEach(([cat, count]) => {
          const percentage = (count / maxCategory) * 100;
          activityChartHTML += `
                    <div class="day-bar">
                        <span class="day-label">${cat}</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${percentage}%; background: ${getCategoryColor(cat)}">${count} activities</div>
                        </div>
                    </div>
                `;
        });
        document.getElementById("activityChart").innerHTML = activityChartHTML;
      }

      // Update JSON editor
      function updateJSONEditor() {
        document.getElementById("jsonEditor").value = JSON.stringify(
          scheduleData,
          null,
          2,
        );
      }

      // Load from JSON
      function loadFromJSON() {
        try {
          const jsonText = document.getElementById("jsonEditor").value;
          scheduleData = JSON.parse(jsonText);

          // Ensure all items have EnableReminder property
          scheduleData = scheduleData.map((item) => ({
            ...item,
            EnableReminder:
              item.EnableReminder !== undefined ? item.EnableReminder : true,
          }));
          saveToLocalStorage();
          renderTable();
          updateAnalytics();
          showNotificationPanel("✅ Data loaded successfully!");
        } catch (e) {
          alert("Invalid JSON format: " + e.message);
        }
      }

      // Copy JSON to clipboard
      function copyJSON() {
        const jsonText = document.getElementById("jsonEditor").value;
        navigator.clipboard.writeText(jsonText).then(() => {
          showNotificationPanel("✅ JSON copied to clipboard!");
        });
      }

      // Format JSON
      function formatJSON() {
        try {
          const jsonText = document.getElementById("jsonEditor").value;
          const parsed = JSON.parse(jsonText);
          document.getElementById("jsonEditor").value = JSON.stringify(
            parsed,
            null,
            2,
          );
          showNotificationPanel("✅ JSON formatted");
        } catch (e) {
          alert("Invalid JSON format");
        }
      }

      // Export to CSV
      function exportToCSV() {
        const headers = [
          "Day",
          "Start Time",
          "End Time",
          "Activity",
          "Notes",
          "Category",
        ];
        let csv = headers.join(",") + "\n";

        scheduleData.forEach((item) => {
          const row = [
            item.Day,
            item.StartTime,
            item.EndTime,
            `"${item.Activity}"`,
            item.Notes ? `"${item.Notes}"` : "",
            item.Category || "",
          ];
          csv += row.join(",") + "\n";
        });

        downloadFile(csv, "schedule.csv", "text/csv");
        showNotificationPanel("✅ CSV exported");
      }

      // Export to JSON
      function exportToJSON() {
        const json = JSON.stringify(scheduleData, null, 2);
        downloadFile(json, "schedule.json", "application/json");
        showNotificationPanel("✅ JSON exported");
      }

      //reset data to default
      function resetToDefault() {
        if (confirm("This will replace your current schedule with the default one. Continue?")) {
          scheduleData = getDefaultScheduleData();
          saveToLocalStorage();
          renderTable();
          updateAnalytics();
          updateJSONEditor();
          showNotificationPanel("✅ Reset to default schedule");
        }
      }

      // Download file
      function downloadFile(content, fileName, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }

      // Add activity
      function addActivity(event) {
        event.preventDefault();

        const newActivity = {
          Day: document.getElementById("day").value,
          StartTime: document.getElementById("startTime").value,
          EndTime: document.getElementById("endTime").value,
          Activity: document.getElementById("activity").value,
          Notes: document.getElementById("notes").value,
          Category: document.getElementById("category").value,
          EnableReminder: document.getElementById("enableReminder").checked,
        };

        scheduleData.push(newActivity);

        // Reset form
        document.getElementById("activityForm").reset();
        document.getElementById("enableReminder").checked = true;

        // Update views
        renderTable();
        updateAnalytics();
        updateJSONEditor();
        saveToLocalStorage();

        showNotificationPanel("✅ Activity added successfully!");

        // Switch to table view
        document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"));
        document.querySelectorAll(".nav-btn")[0].classList.add("active");
        document.querySelectorAll(".view-section").forEach((section) => section.classList.remove("active"));
        document.getElementById("tableView").classList.add("active");
      }

      // Edit activity
      function editActivity(index) {
        const item = scheduleData[index];
        document.getElementById("editIndex").value = index;
        document.getElementById("editDay").value = item.Day;
        document.getElementById("editStartTime").value = item.StartTime;
        document.getElementById("editEndTime").value = item.EndTime;
        document.getElementById("editActivity").value = item.Activity;
        document.getElementById("editNotes").value = item.Notes || "";
        document.getElementById("editCategory").value = item.Category || "Other";
        document.getElementById("editEnableReminder").checked = item.EnableReminder !== false;
        document.getElementById("editModal").classList.add("active");
      }

      // Save edit
      function saveEdit(event) {
        event.preventDefault();
        const index = parseInt(document.getElementById("editIndex").value);
        scheduleData[index] = {
          Day: document.getElementById("editDay").value,
          StartTime: document.getElementById("editStartTime").value,
          EndTime: document.getElementById("editEndTime").value,
          Activity: document.getElementById("editActivity").value,
          Notes: document.getElementById("editNotes").value,
          Category: document.getElementById("editCategory").value,
          EnableReminder: document.getElementById("editEnableReminder").checked,
        };
        closeModal();
        renderTable();
        updateAnalytics();
        updateJSONEditor();
        showNotificationPanel("✅ Activity updated successfully!");
        saveToLocalStorage();  
      }

      // Delete activity
      function deleteActivity(index) {
        if (confirm("Are you sure you want to delete this activity?")) {
          scheduleData.splice(index, 1);
          renderTable();
          updateAnalytics();
          updateJSONEditor();
          showNotificationPanel("✅ Activity deleted");
          saveToLocalStorage(); 
        }
      }

      // Close modal
      function closeModal() {
        document.getElementById("editModal").classList.remove("active");
      }

      // Highlight current and next activities in table
      function highlightCurrentAndNextRows(currentActivity) {
        const rows = document.querySelectorAll("#tableContainer tbody tr");
        const now = new Date();
        const currentDay = getCurrentDay();
        const currentTime =
          now.getHours().toString().padStart(2, "0") +
          ":" +
          now.getMinutes().toString().padStart(2, "0");

        rows.forEach((row) => {
          row.classList.remove("current-activity-row", "next-activity-row");

          const cells = row.getElementsByTagName("td");
          if (cells.length > 0) {
            const day = cells[0].textContent;
            const startTime = cells[1].textContent;
            const activity = cells[3].textContent;

            // Highlight current activity
            if (
              currentActivity &&
              day === currentActivity.Day &&
              startTime === currentActivity.StartTime &&
              activity === currentActivity.Activity
            ) {
              row.classList.add("current-activity-row");
            }

            // Find and highlight next activity
            if (
              day === currentDay &&
              startTime > currentTime &&
              !row.classList.contains("current-activity-row")
            ) {
              // Check if this is the next activity
              const isNext = !Array.from(rows).some((r) => {
                const c = r.getElementsByTagName("td");
                return (
                  c.length > 0 &&
                  c[0].textContent === currentDay &&
                  c[1].textContent > currentTime &&
                  c[1].textContent < startTime
                );
              });

              if (isNext) {
                row.classList.add("next-activity-row");
              }
            }
          }
        });
      }

      // Check for overnight activities reminder
      setInterval(function () {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Special reminder for sleep time
        if (currentHour === 21 && currentMinute === 55) {
          showNotificationPanel(" Time to prepare for sleep in 5 minutes");
        } else if (currentHour === 5 && currentMinute === 25) {
          showNotificationPanel(" Wake up in 5 minutes");
        } else if (currentHour === 22 && currentMinute === 0) {
          showNotificationPanel(" Time to sleep");
        } else if (currentHour === 5 && currentMinute === 30) {
          showNotificationPanel(" Good morning! Time to wake up");
        }
      }, 60000); // Check every minute

      // Close modal when clicking outside
      window.onclick = function (event) {
        const modal = document.getElementById("editModal");
        if (event.target === modal) {
          closeModal();
        }
      };