"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowUp,
  Heart,
  ExternalLink,
  Clock
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ceradev",
      color: "hover:text-neutral-900 dark:hover:text-neutral-100"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://linkedin.com/in/césar-aramis-suárez-orizondo/",
      color: "hover:text-info-600"
    },
    {
      name: "Email",
      icon: Mail,
      href: "suarezorizondocesararamis@gmail.com",
      color: "hover:text-primary"
    }
  ];

  const quickLinks = [
    { name: "Inicio", href: "" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Experiencia", href: "#experience" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer id="footer" className="relative bg-background border-t border-border/30 backdrop-blur-md overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-l from-info-500/5 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mr-3"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Ceradev
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Desarrollador Full Stack apasionado por crear soluciones innovadoras 
                y experiencias digitales excepcionales. Transformando ideas en realidad.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  <span>suarezorizondocesararamis@gmail.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  <span>Tenerife, España</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.name}</span>
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Conecta conmigo</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm text-muted-foreground ${social.color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-1.5 rounded-lg bg-background border border-border/50 mr-3 group-hover:border-primary/50 transition-colors"
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.div>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 p-3 rounded-xl bg-background border border-border/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-success-500"
                  />
                  <span className="text-sm font-medium text-foreground">Disponible para proyectos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Respuesta en 24h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} Ceradev. Hecho con</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-1"
                >
                  <Heart className="h-4 w-4 text-primary" />
                </motion.div>
                <span>en España</span>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border/50 hover:border-primary/50 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>Volver arriba</span>
                </motion.button>
              </div>
        </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
