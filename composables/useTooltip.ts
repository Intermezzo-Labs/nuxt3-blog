interface IMessage {
  heading?: string;
  text: string;
  type?: "error" | "success" | "warning";
}

const messages = reactive<Record<number, IMessage>>({});

const addMsg = (msg: IMessage) => {
  const id = new Date().getMilliseconds();
  messages[id] = msg;

  setInterval(() => removeMsg(id), 5000);
};

const removeMsg = (id: number) => {
  delete messages[id];
};

export default function () {
  return {
    messages,
    addMsg,
    removeMsg,
  };
}
