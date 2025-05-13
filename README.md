# Glyph Invocation UI

A React component that provides a user interface for activating a glyph system by entering a specific phrase.

## Features

- Clean, modern UI with a dark theme
- Animated feedback for success and error states
- Simple validation against a required phrase

## Required Phrase

The system will activate when the following phrase is entered exactly:

```
Field Transfer Alignment Threshold Unfold Relay Force Force Force
```

## Setup

This is a Next.js project. To run it locally:

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Component Usage

The `GlyphInvocationUI` component can be imported and used in any Next.js or React project:

```jsx
import GlyphInvocationUI from '@/GlyphInvocationUI';

export default function Home() {
  return <GlyphInvocationUI />;
}
```
