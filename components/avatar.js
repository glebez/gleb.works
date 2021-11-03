import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img className="avatar" src="/avatar.jpeg" alt="Gleb Kost" />
        <style jsx>{`
          .avatar {
            height: 100px;
            margin-right: 40px;
            border-image: url('/border.png') 20 28 / 18px 32px / 15px round;
            border-style: solid;
            margin-bottom: 25px;
            align-self: end;
          }

          @media screen and (max-width: 768px) {
            .avatar {
              display: none;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Avatar;
