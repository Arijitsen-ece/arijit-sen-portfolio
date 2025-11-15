import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

 // ✅ FORMSPREE SEND FUNCTION
const sendEmail = async (e: any) => {
  e.preventDefault();
  setIsSending(true);

  try {
    const response = await fetch("https://formspree.io/f/mzzygvnk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.from_name,
        email: formData.from_email,
        message: formData.message,

        // ⭐ Professional email subject
        _subject: "New Message from Arijit Sen Portfolio",
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Network error. Try again.");
  }

  setIsSending(false);
};
const handleChange = (e: any) => { 
  setFormData({ ...formData, [e.target.name]: e.target.value }); 
};

 return (
   <section id="contact" className="py-20 bg-white dark:bg-gray-900"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let’s connect and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">

                {/* EMAIL */}
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-900 dark:text-white font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* LOCATION */}
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.social.github },
                  { icon: Linkedin, href: personalInfo.social.linkedin },
                  { icon: Mail, href: `mailto:${personalInfo.email}` },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* INFO BOX */}
            <motion.div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Available for Opportunities</h4>
              <p>
                I'm currently seeking internship and full-time roles in software development & electronics engineering.
              </p>
            </motion.div>

          </motion.div>

          {/* CONTACT FORM (RIGHT SIDE) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={sendEmail} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  placeholder="Your Name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {/* SUCCESS MESSAGE */}

              {success && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-4 rounded-lg bg-green-100 border border-green-400 text-green-800 dark:bg-green-900 dark:text-green-100 dark:border-green-700 shadow-md"
  >
    <strong>Message Sent Successfully!</strong>
    <p className="text-sm mt-1">
      Thank you for reaching out. I will get back to you shortly.
    </p>
  </motion.div>
)}


            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
