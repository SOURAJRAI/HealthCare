export const calendarData = {
  month: "October 2021",
  days: [
    { 
      name: "Mon", 
      date: "25",
      isActive: false,
      slots: [
        { time: "10:00", highlight: false },
        { time: "11:00", highlight: false },
        { time: "12:00", highlight: false }
      ]
    },
    { 
      name: "Tues", 
      date: "26",
      isActive: true,
      slots: [
        { time: "08:00", highlight: false },
        { time: "09:00", highlight: true },
        { time: "10:00", highlight: false }
      ]
    },
    { 
      name: "Wed", 
      date: "27",
      isActive: false,
      slots: [
        { time: "12:00", highlight: false },
        { time: null, highlight: false },
        { time:  "13:00", highlight: false }  
      ]
    },
    { 
      name: "Thurs", 
      date: "28",
      isActive: false,
      slots: [
        { time: "10:00", highlight: false },
        { time: "11:00", highlight: true },
        { time: null, highlight: false }  
      ]
    },
    { 
      name: "Fri", 
      date: "29",
      isActive: false,
      slots: [
        { time: null, highlight: false },  
        { time: "14.00", highlight: false },  
        { time: "16:00", highlight: false }
      ]
    },
    { 
      name: "Sat", 
      date: "30",
      isActive: false,
      slots: [
        { time: "12:00", highlight: true },
        { time: "14:00", highlight: false },
        { time: "15:00", highlight: false }
      ]
    },
    { 
      name: "Sun", 
      date: "31",
      isActive: false,
      slots: [
        { time: "09:00", highlight: true },
        { time: "10:00", highlight: false },
        { time: "11:00", highlight: false }
      ]
    }
  ],
  appointments: [
    {
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
      color: "dentist"
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Dynes",
      icon: "💪",
      color: "physio"
    }
  ],
  upcomingSchedule: [
    {
      day: "Thursday",
      appointments: [
        {
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "✏️"
        },
        {
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "👁️"
        }
      ]
    },
    {
      day: "Saturday",
      appointments: [
        {
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "❤️"
        },
        {
          title: "Neurologist",
          time: "04:00 PM",
          icon: "🧠"
        }
      ]
    }
  ]
};