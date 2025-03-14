import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Video, MessageSquare, Users, PhoneCall, Plus } from "lucide-react";

const VideoCall = () => {
  return (
    <Card className="p-4 w-full">
      {/* Video Call Section */}
      <div className="relative">
        <video className="w-full h-[300px] bg-gray-900 rounded-xl" controls>
          {/* Placeholder for video */}
        </video>
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
          04:32
        </div>
        {/* Call Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button variant="destructive"><PhoneCall /></Button>
          <Button variant="secondary"><Video /></Button>
        </div>
      </div>
    </Card>
  );
};

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { user: "Alex", text: "Hi everyone, let’s start the call soon" },
    { user: "Robert", text: "Hey, we’re waiting 😊" },
  ]);
  
  return (
    <Card className="p-4 w-full h-[400px] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded-lg"
          placeholder="Type a message..."
        />
        <Button className="ml-2"><MessageSquare /></Button>
      </div>
    </Card>
  );
};

const Participants = () => {
  return (
    <Card className="p-4 w-full">
      <h3 className="text-lg font-bold">Participants</h3>
      <div className="flex justify-between mt-2">
        <span>On-Call: 10</span>
        <span>Absent: 3</span>
      </div>
      <Button className="mt-4 w-full"><Plus /> Add user to call</Button>
    </Card>
  );
};

const MeetingDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <VideoCall />
      <ChatBox />
      <Participants />
    </div>
  );
};

export default MeetingDashboard;
