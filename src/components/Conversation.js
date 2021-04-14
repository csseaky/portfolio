import React from 'react'
import {useGlobalContext} from "./context/useGlobalContext"

const Conversation = () => {
  const {isConversationHidden} = useGlobalContext();
    return (
      <div>
        <p
          className={`text-3xl pl-10 font-light mb-8 ${
            isConversationHidden ? null : "hidden"
          }`}
        >
          You can visit my GitHub, LinkedIn pages or contact me via mail.{" "}
        </p>
        <p
          className={`text-3xl pl-10 font-light mb-8 ${
            isConversationHidden ? null : "hidden"
          }`}
        >
          Click the <span className="animate-pulse text-red-500">energetic</span>{" "}
          button to know more about me and my work.{" "}
        </p>
      </div>
    );
}

export default Conversation
