import { create } from "zustand";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
}

interface ChatStore {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  historyLoaded: boolean;
  addMessage: (msg: Omit<ChatMessage, "id" | "createdAt">, id?: string) => string;
  updateLastAssistant: (content: string) => void;
  clearMessages: () => void;
  setMessages: (msgs: ChatMessage[]) => void;
  setOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  setHistoryLoaded: (v: boolean) => void;
}

export const useChatStore = create<ChatStore>()((set) => ({
  messages: [],
  isOpen: false,
  isLoading: false,
  historyLoaded: false,

  addMessage: (msg, id) => {
    const newId = id ?? crypto.randomUUID();
    set((s) => ({
      messages: [
        ...s.messages,
        { ...msg, id: newId, createdAt: Date.now() },
      ],
    }));
    return newId;
  },

  updateLastAssistant: (content) => {
    set((s) => {
      const msgs = [...s.messages];
      const last = msgs[msgs.length - 1];
      if (last?.role === "assistant") {
        msgs[msgs.length - 1] = { ...last, content };
      }
      return { messages: msgs };
    });
  },

  clearMessages: () => set({ messages: [] }),
  setMessages: (msgs) => set({ messages: msgs }),
  setOpen: (open) => set({ isOpen: open }),
  setLoading: (loading) => set({ isLoading: loading }),
  setHistoryLoaded: (v) => set({ historyLoaded: v }),
}));
