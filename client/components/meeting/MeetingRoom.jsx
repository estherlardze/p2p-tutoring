import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const MeetingRoom = () => {
  const [layout, setLayout] = useState("speaker-left")
  const [showParticipants, setShowParticipants] = useState(false)

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout/>
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left"/>       
      default:
        return <SpeakerLayout participantsBarPosition="right"/>

    }
  }
  return (
    <section className='w-full relative h-screen overflow-hidden pt-4 text-white'>
      <div className='flex justify-center relative size-full items-center'>
        <div className='size-full flex max-w-[1000px] items-center justify-center'>
        <CallLayout/>
        </div>

        <div className={`${showParticipants ? "block" : "hidden"} h-[calc(100vh-84px)] ml-2`}>
          <CallParticipantsList onClose={() => setShowParticipants(false)}/>
        </div>
      </div>

   <div className='fixed bottom-0 flex w-ful items-center justify-center gap-5'>
    <CallControls/>
   </div>
    </section>
  )
}

export default MeetingRoom
