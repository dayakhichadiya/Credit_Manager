import React from "react";

const Services = () => {
  const services = [
    {
      title: "Card Management",
      description: "Easily add, update, and remove your credit cards in one place.",
      icon: "💳",
    },
    {
      title: "Expense Tracking",
      description: "Monitor your expenses and stay within your budget effortlessly.",
      icon: "📊",
    },
    {
      title: "Payment Reminders",
      description: "Get notified before your due dates to avoid late fees.",
      icon: "⏰",
    },
    {
      title: "Secure Transactions",
      description: "Your data is encrypted and secured with the latest technology.",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-11/12 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-all"
          >
            <span className="text-4xl">{service.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
