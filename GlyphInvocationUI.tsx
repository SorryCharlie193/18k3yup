import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const REQUIRED_PHRASE = "Field Transfer Alignment Threshold Unfold Relay Force Force Force";

export default function GlyphInvocationUI() {
  const [input, setInput] = useState("");
  const [activated, setActivated] = useState(false);
  const [error, setError] = useState("");

  const handleActivate = () => {
    if (input.trim() === REQUIRED_PHRASE) {
      setActivated(true);
      setError("");
    } else {
      setError("Incorrect invocation. The glyph refuses to run.");
      setActivated(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <Card className="w-full max-w-xl text-center">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Glyph Scroll Activation</h1>
          <p className="mb-4 italic">Input the invocation to awaken the system:</p>
          <Input
            placeholder="Enter the glyph invocation exactly..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-black"
          />
          <Button onClick={handleActivate} className="mt-4">
            Activate
          </Button>

          <AnimatePresence>
            {activated && (
              <motion.p
                className="mt-4 text-green-400 font-mono text-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                ✓ Invocation accepted. Glyph system running...
              </motion.p>
            )}
            {error && (
              <motion.p
                className="mt-4 text-red-400 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
