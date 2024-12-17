const startScreenRecording = async () => {
  try {
    // Request screen capture
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: "always",
      },
      audio: true,
    });

    // Create MediaRecorder instance
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];

    // Handle data available event
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    // Handle recording stop
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, {
        type: "video/webm",
      });

      // Create download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = `recording-${new Date().toISOString()}.webm`;
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      stream.getTracks().forEach((track) => track.stop());
    };

    // Start recording
    mediaRecorder.start();
    return mediaRecorder;
  } catch (error) {
    console.error("Error starting screen recording:", error);
    return null;
  }
};

// Usage example:
const startRecording = async () => {
  const recorder = await startScreenRecording();
  if (recorder) {
    // Stop recording after 5 seconds (example)
    setTimeout(() => {
      recorder.stop();
    }, 5000);
  }
};

// With start/stop buttons:
let mediaRecorder = null;

const handleStart = async () => {
  mediaRecorder = await startScreenRecording();
};

const handleStop = () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
};
