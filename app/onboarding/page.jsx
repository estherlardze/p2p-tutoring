'use client'

import React, { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import Stepone from '@/components/onboarding/Stepone';
import Steptwo from '@/components/onboarding/Steptwo';
import Stepthree from '@/components/onboarding/Stepthree';

const Onboarding = () => {
  const [formInfo, setFormInfo] = useState({
    bio: '',
    courses: [],
    contact: '',
    tutorialType: ["Online", "In-person"],
    availability: '',
    picture: '',
    transcript: ''
  });

  const handleFormChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setFormInfo({ ...formInfo, [name]: files[0] });
    } else {
      setFormInfo({ ...formInfo, [name]: value });
    }
  };

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className='flex min-h-screen justify-center items-center'>
      <div className='max-w-[90%] mx-auto sm:mx-0 sm:max-w-xl mb-8'>  
        <h1 className='text-2xl sm:text-3xl font-bold text-center mb-4 text-black/80'>Onboarding stage</h1>
        <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
          <Stepper.Step label="First step" description="">
            <Stepone formInfo={formInfo} handleFormChange={handleFormChange} />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="">
            <Steptwo formInfo={formInfo} handleFormChange={handleFormChange} />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="">
            <Stepthree formInfo={formInfo} handleFormChange={handleFormChange} />
          </Stepper.Step>
          <Stepper.Completed>
            Congratulations you have finished your onboarding stage.
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </div>
    </main>
  );
};

export default Onboarding;
