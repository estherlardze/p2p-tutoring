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
    <section className='w-screen relative h-screen pt-4 text-white bg-black'>
      <div className='flex justify-center relative w-full items-center h-[90vh]'>
        <div className='size-full flex w-[80%] mx-auto h-[90vh] items-center justify-center'>
        <CallLayout/>
        </div>

        <div className={`${showParticipants ? "block" : "hidden"} h-[calc(100vh-84px)] ml-2`}>
          <CallParticipantsList onClose={() => setShowParticipants(false)}/>
        </div>
      </div>

   <div className='fixed bottom-2 flex w-full items-center justify-center gap-5'>
    <CallControls/>
   </div>
    </section>
  )
}

export default MeetingRoom
