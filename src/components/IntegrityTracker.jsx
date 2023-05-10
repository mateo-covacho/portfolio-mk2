import React from "react";

const IntegrityTracker = () => {
  return (
    <div className='container-fluid'>
      <p>
        LeakShield is a content miss-distribution detection system that helps content creators and managers protect their content and revenue from
        unauthorized access or distribution. It works by embedding a unique identifier into the content using techniques such as metadata injection.
        This identifier can then be used to trace the source of unauthorized copies of the content and take action to protect the content and revenue
        of the content creators and managers.
      </p>
      <p>
        LeakShield is implemented as a software application or service, and can be integrated into existing content management systems or platforms.
        The system can be configured to support different types of content, including visual media, audio files, text documents, and more.
        Additionally, LeakShield can be customized to support different identifier embedding techniques and response actions depending on the specific
        needs and requirements of the content creators and managers.
      </p>
      <p>
        From a technical standpoint, LeakShield utilizes a combination of server-side and client-side technologies to embed the unique identifier into
        the content and trace the source of unauthorized copies. On the server side, LeakShield uses technologies such as Node.js and Express to
        handle the metadata injection process and store the identifier in the database. On the client side, LeakShield uses technologies such as
        JavaScript and HTML/CSS to display the content and handle user interactions.
      </p>
      <p>
        Overall, LeakShield provides a robust and flexible solution for content creators and managers looking to protect their content and revenue
        from unauthorized access or distribution.
      </p>
    </div>
  );
};

export default IntegrityTracker;
