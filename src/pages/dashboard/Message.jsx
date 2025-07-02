import React from "react";
import { Mail, CalendarDays, User2 } from "lucide-react";

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
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto mb-10 flex items-center gap-3">
        <Mail className="w-8 h-8 text-indigo-600" />
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Messages
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {dummyMessages.map((msg, idx) => (
          <article
            key={msg.id}
            className="group relative bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 hover:ring-indigo-300 overflow-hidden transition-all duration-300"
          >
      
            <span
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 group-hover:w-2 transition-all duration-300"
              aria-hidden="true"
            />

            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {msg.subject}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <User2 className="w-4 h-4" />
                <span>{msg.sender}</span>
              </div>

              <time
                dateTime={msg.date}
                className="mt-4 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
              >
                <CalendarDays className="w-3 h-3" />
                {new Date(msg.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>

              <p className="mt-4 text-gray-700 leading-relaxed line-clamp-4">
                {msg.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Message;
