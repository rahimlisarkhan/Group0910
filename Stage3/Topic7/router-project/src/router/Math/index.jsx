import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChatMessageContent() {
  const params = useParams();

  const [data, setData] = useState(null);

  console.log("params", params);

  useEffect(() => {
    if (params.channel_id && params.user_id && params.room_id) {
      console.log("ChatMessageContent");
      fetch(
        `https://example.com/api/chat?channel_id=${params.channel_id}&user_id=${params.user_id}&room=${params.room_id}`
      )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  }, [params]);

  return (
    <div>
      ChatMessageContent
      {/* {data} */}
    </div>
  );
}

export default ChatMessageContent;
