declare global {
  interface Window {
    openQuizPopup: (title: string, message: string) => void;
  }
}

export {}; 