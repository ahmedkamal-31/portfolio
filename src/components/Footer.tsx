import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }} className="bg-slate-900 text-center text-slate-400 py-8">
      © 2026 Ahmed Kamal. All Rights Reserved.
    </motion.footer>
  );
}

export default Footer;