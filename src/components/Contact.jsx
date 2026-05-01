import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Contact = () => {

  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
  e.preventDefault()
  setLoading(true)

  const toastId = toast.loading('Sending message...')

  emailjs.sendForm(
    'service_hkdfebf',
    'template_slns86l',
    form.current,
    'XIB8LJfjbCcrcSlm2'
  )
  .then(() => {
    toast.success('Message sent successfully', { id: toastId })
    form.current.reset()
    setLoading(false)
  })
  .catch((error) => {
    console.error(error)
    toast.error('Something went wrong', { id: toastId })
    setLoading(false)
  })
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>
          Get In <span className='text-purple'>Touch</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* ✅ FORM */}
          <div>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>

              <div>
                <label className='block text-gray-300 mb-2'>Your Name</label>
                <input 
                  type="text"
                  name="name"   
                  required
                  placeholder="Full Name"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple'
                />
              </div>

              <div>
                <label className='block text-gray-300 mb-2'>Email</label>
                <input 
                  type="email"
                  name="email"   
                  required
                  placeholder="your@email.com"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple'
                />
              </div>

              <div>
                <label className='block text-gray-300 mb-2'>Message</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Type your message..."
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple'
                />
              </div>

              <button 
                type='submit'
                disabled={loading}
                className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition text-white disabled:opacity-50'
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className='space-y-8'>
            
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaMapMarkerAlt /></div>
              <div>
                <h3 className='text-lg font-semibold'>Location</h3>
                <p className='text-gray-400'>Gurgaon, Haryana</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaEnvelope /></div>
              <div>
                <h3 className='text-lg font-semibold'>Email</h3>
                <p className='text-gray-400'>omeshmandavi750@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaPhoneAlt /></div>
              <div>
                <h3 className='text-lg font-semibold'>Phone</h3>
                <p className='text-gray-400'>+91 6261745247</p>
              </div>
            </div>

            {/* Socials */}
            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>

                <a href="https://github.com/Omesh9227" target="_blank" rel="noopener noreferrer"
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white'>
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/omesh-mandavi-b5a207203/" target="_blank" rel="noopener noreferrer"
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white'>
                  <FaLinkedin />
                </a>

                <a href="https://x.com/omesh612?t=Rsl1QVq5XRSGHBhfGIJjfA&s=09" target="_blank" rel="noopener noreferrer"
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple'>
                  <FaTwitter />
                </a>

                <a href="https://www.instagram.com/omeshmandavi9227/" target="_blank" rel="noopener noreferrer"
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white'>
                  <FaInstagram />
                </a>

                <a href="https://www.youtube.com/@OmeshMandavi" target="_blank" rel="noopener noreferrer"
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white'>
                  <FaYoutube />
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact