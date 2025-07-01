import React from "react";
import { Mail, CalendarDays, User2 } from "lucide-react"; // Optional: Add icons using lucide-react

const Message = () => {
  const dummyMessages = [
    {
      id: 1,
      sender: "John Doe",
      subject: "Interested in Apartment #204",
      content:
        "Hi, I am interested in the 2BHK apartment listed on your website. Can we schedule a visit?",
      date: "2025-07-01",
    },
    {
      id: 2,
      sender: "Sarah Khan",
      subject: "Need more photos of the villa",
      content: "Can you please share more pictures of the villa near Clifton?",
      date: "2025-06-29",
    },
    {
      id: 3,
      sender: "Ali Raza",
      subject: "Payment options?",
      content: "Do you offer any installment plans for the new project?",
      date: "2025-06-27",
    },
    {
      id: 4,
      sender: "Mehwish Ahmed",
      subject: "Looking for a 3-bedroom house",
      content:
        "Hello, I’m relocating to Karachi and looking for a 3-bedroom house in a safe neighborhood. Can you suggest some listings?",
      date: "2025-06-25",
    },
    {
      id: 5,
      sender: "Owais Siddiqui",
      subject: "Follow-up on property visit",
      content:
        "Thanks for arranging the visit last week. I'm still interested in the property. Can we discuss the pricing further?",
      date: "2025-06-23",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📨 Messages</h2>

      <div className="grid gap-6">
        {dummyMessages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xl font-semibold">
                  {msg.sender.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {msg.subject}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <User2 className="w-4 h-4" />
                    <span>{msg.sender}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{msg.date}</span>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
