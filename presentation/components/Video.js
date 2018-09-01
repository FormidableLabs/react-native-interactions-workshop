import React from "react";
import { withDeck } from "mdx-deck";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  z-index: -1;

  & ~ * {
    display: inline-block;
    background: ${p => p.theme.colors.background};
    border-radius: 5px;
    margin-left: -6px;
    padding: 4px 6px;
  }
`;

const Video = styled.video.attrs({
  playsInline: true,
  muted: true,
  loop: true,
  autoPlay: true,
  preload: "metadata"
})`
  transition: transform 1.7s ease-in-out;

  ${p => p.isActive && css`
     transform: scale(1.6) translateY(5vh);
  `}
`;

const VideoMain = ({ deck: { active }, url }) => (
  <Wrapper>
    <Video isActive={active}>
      <source src={url} type="video/mp4" />
      Your browser does not support video. See video at <a href={url}>{url}</a>
    </Video>
  </Wrapper>
);

export default withDeck(VideoMain);
