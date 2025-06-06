import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationList,
  Conversation,
  Sidebar,
  ConversationHeader,
  Avatar,
  TypingIndicator,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { Dropdown, Menu, Input } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useGetMessages, useSendMessage } from "@/hooks/dashboard.hook";

const Messages = () => {
  const [searchValue, setSearchValue] = useState("");
  const [receiverId, setReceiverId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // API integration
  const { data: messageData, isLoading } = useGetMessages(receiverId); // Optional: pass chatId
  const { mutate: sendMessage } = useSendMessage();

  const [messages, setMessages] = useState([]);
  // const currentUserId = 3; // Replace with actual user from auth context
  const user = JSON.parse(localStorage.getItem("user"));
  const currentUserId = user?.id;

  // Sync API data
  useEffect(() => {
    if (messageData?.data) {
      const formattedMessages = messageData.data.map((msg) => ({
        message: msg.content,
        sender: msg.sender_id === currentUserId ? "user" : "agent",
        direction: msg.sender_id === currentUserId ? "outgoing" : "incoming",
      }));
      setMessages(formattedMessages);
    }
  }, [messageData, currentUserId]);
  useEffect(() => {
    const messageList = document.querySelector(
      ".cs-message-list__scroll-wrapper"
    );
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  if (!currentUserId) {
    return <div>Please log in to view messages.</div>;
  }

  const handleSend = (messageText) => {
    if (!messageText.trim() || !receiverId) return;

    const newMessage = {
      receiver_id: receiverId,
      content: messageText,
    };

    // Optimistic UI update
    setMessages((prev) => [
      ...prev,
      {
        message: messageText,
        sender: "user",
        direction: "outgoing",
      },
    ]);

    sendMessage(newMessage, {
      onSuccess: (res) => {
        // You can update message with server ID or timestamp if needed
      },
      onError: (err) => {
        console.error("Send failed", err);
      },
    });
  };

  const menu = (
    <Menu
      items={[
        { key: "1", label: "View Profile" },
        { key: "2", label: "Clear Chat" },
        { key: "3", label: "Block User" },
      ]}
    />
  );

  return (
    <div className=" h-full">
      <MainContainer responsive>
        <Sidebar position="left" scrollable>
          <div className="p-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold">
              Messages
              {/* <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                29
              </span> */}
            </h2>
            <Input
              placeholder="Search..."
              className="mt-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <ConversationList>
            {[...Array(10)].map((_, i) => (
              <Conversation
                key={i}
                onClick={() => {
                  setReceiverId(i + 1);
                  setSelectedUser({
                    id: i + 1,
                    name: `User ${i + 1}`,
                    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
                    status: "Online",
                  });
                }}
                name={`User ${i + 1}`}
                lastSenderName="User"
                info="Last message preview..."
              >
                <Avatar src={`https://i.pravatar.cc/150?img=${i + 1}`} />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <Avatar src={selectedUser?.avatar} />
            <ConversationHeader.Content
              userName={selectedUser?.name}
              info={selectedUser?.status}
            />
            <ConversationHeader.Actions>
              <Dropdown overlay={menu} trigger={["click"]}>
                <EllipsisOutlined className="text-lg cursor-pointer" />
              </Dropdown>
            </ConversationHeader.Actions>
          </ConversationHeader>

          <MessageList
            typingIndicator={<TypingIndicator content="Jerome is typing..." />}
          >
            <MessageSeparator content="19 August" />
            {messages.map((msg, i) => (
              <Message
                key={i}
                model={{
                  message: msg.message,
                  sentTime: "just now",
                  sender: msg.sender,
                  direction: msg.direction,
                  position: "single",
                }}
              />
            ))}
            <MessageSeparator content="Today" />
          </MessageList>

          <MessageInput
            placeholder="Send a message..."
            attachButton={false}
            sendButton
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Messages;
