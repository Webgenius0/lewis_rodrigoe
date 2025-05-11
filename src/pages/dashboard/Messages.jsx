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
import { Dropdown, Menu, Input } from 'antd';
import { EllipsisOutlined, PaperClipOutlined } from '@ant-design/icons';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      message: 'Hello, how can I help you?',
      sender: 'agent',
      direction: 'incoming',
    },
    {
      message: 'I need info about your boiler plans.',
      sender: 'user',
      direction: 'outgoing',
    },
  ]);

  const [searchValue, setSearchValue] = useState('');

  const handleSend = (message) => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        { message, sender: 'user', direction: 'outgoing' },
      ]);
    }
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
    <div className=" h-full">
      <MainContainer responsive>
        <Sidebar position="left" scrollable>
          <div className="p-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold">
              Messages
              <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                29
              </span>
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
