import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function BinoBuddy() {
  const [question, setQuestion] = React.useState("");
  const [sampleAnswer, setSampleAnswer] = React.useState("");

  const handleAsk = () => {
    if (!question.trim()) return;
    setSampleAnswer(
      `Bino says: Here's a quick answer to your question — "${question}". Try it on WhatsApp for more!`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🤖 Ask Bino Anything!</h1>
      <p className="text-center max-w-md mb-6">
        Bino is a WhatsApp-based search tool. Type a question and see how Bino would respond.
      </p>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
          type="text"
          placeholder="e.g. Best phone under ₹10000"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button onClick={handleAsk}>Ask</Button>
      </div>
      {sampleAnswer && (
        <Card className="max-w-md mt-6">
          <CardContent className="p-4">
            <p>{sampleAnswer}</p>
          </CardContent>
        </Card>
      )}
      <a
        href="https://wa.me/919800081110"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        <Button variant="outline">💬 Try on WhatsApp</Button>
      </a>
    </div>
  );
}
