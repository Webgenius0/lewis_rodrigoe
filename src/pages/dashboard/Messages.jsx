import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
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
} from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined, PaperClipOutlined } from '@ant-design/icons';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      message: 'Hello, here’s the design requirement document.',
      sender: 'agent',
      direction: 'incoming',
    },
    {
      message: 'Thanks! I’ll check it out.',
      sender: 'user',
      direction: 'outgoing',
    },
  ]);

  const handleSend = (message) => {
    setMessages((prev) => [
      ...prev,
      { message, sender: 'user', direction: 'outgoing' },
    ]);
  };

  const menu = (
    <Menu
      items={[
        { key: '1', label: 'View Profile' },
        { key: '2', label: 'Clear Chat' },
        { key: '3', label: 'Block User' },
      ]}
    />
  );

  return (
    <div className="h-screen bg-white">
      <MainContainer responsive>
        {/* Sidebar */}
        <Sidebar position="left" scrollable className="overflow-y-auto">
          <ConversationList>
            {Array.from({ length: 10 }).map((_, i) => (
              <Conversation
                key={i}
                name={`User ${i + 1}`}
                lastSenderName="User"
                info="Last message preview..."
              >
                <Avatar src={`https://i.pravatar.cc/150?img=${i + 1}`} />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>

        {/* Chat Area */}
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="https://i.pravatar.cc/150?img=3" />
            <ConversationHeader.Content userName="Jerome White" info="Online" />
            <ConversationHeader.Actions>
              <Dropdown overlay={menu} trigger={['click']}>
                <EllipsisOutlined className="text-lg cursor-pointer" />
              </Dropdown>
            </ConversationHeader.Actions>
          </ConversationHeader>

          <MessageList
            typingIndicator={<TypingIndicator content="Jerome is typing..." />}
            className="overflow-y-auto"
          >
            <MessageSeparator content="19 August" />
            {messages.map((msg, i) => (
              <Message
                key={i}
                model={{
                  message: msg.message,
                  sentTime: 'just now',
                  sender: msg.sender,
                  direction: msg.direction,
                  position: 'single',
                }}
              />
            ))}
            <MessageSeparator content="Today" />
          </MessageList>

          {/* Custom Input with File Upload */}
          <div className="flex items-center gap-2 px-4 py-2 border-t">
            <label className="cursor-pointer">
              <input type="file" hidden />
              <PaperClipOutlined className="text-xl text-gray-500" />
            </label>
            <div className="flex-1">
              <MessageInput
                placeholder="Send a message..."
                attachButton={false}
                onSend={handleSend}
              />
            </div>
          </div>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Messages;
