import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Contacts</h2>
        <ul>
          <li className="mb-2 p-2 bg-white rounded shadow">Contact 1</li>
          <li className="mb-2 p-2 bg-white rounded shadow">Contact 2</li>
          <li className="mb-2 p-2 bg-white rounded shadow">Contact 3</li>
        </ul>
      </div>

      {/* Main Chat Window */}
      <div className="w-3/4 flex flex-col">
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className="mb-2 p-2 bg-white rounded shadow">
              {message}
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 bg-gray-100 flex items-center">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message"
            className="flex-1 mr-2"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;