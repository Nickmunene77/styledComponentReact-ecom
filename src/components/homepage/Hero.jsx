import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa' // Import the necessary icons

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageC = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;
  cursor: pointer;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PlayPauseButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #777; /* Gray background */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const PlayIcon = styled(FaPlay)`
  color: #fff; /* White play icon */
  font-size: 30px;
`

const PauseIcon = styled(FaPause)`
  color: #fff; /* White pause icon */
  font-size: 30px;
`

const Hero = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTogglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch((error) => {
        // Handle the error or provide user feedback
        console.error('Error playing the video:', error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Section1>
      <ImageC onClick={handleTogglePlay}>
        <Video ref={videoRef} src="assets/Videos/pexel1.mp4" />
        <PlayPauseButton>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </PlayPauseButton>
      </ImageC>
    </Section1>
  )
}

export default Hero
