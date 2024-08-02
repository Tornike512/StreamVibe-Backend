import { v4 as uuidv4 } from "uuid";

const faq = [
  { id: uuidv4(), faq: "What is StreamVibe?", faqNum: "01" },
  { id: uuidv4(), faq: "How much does StreamVibe cost?", faqNum: "02" },
  {
    id: uuidv4(),
    faq: "What content is available on StreamVibe?",
    faqNum: "03",
  },
  { id: uuidv4(), faq: "How can I watch StreamVibe?", faqNum: "04" },
  { id: uuidv4(), faq: "How do I sign up for StreamVibe?", faqNum: "05" },
  { id: uuidv4(), faq: "What is the StreamVibe free trial?", faqNum: "06" },
  {
    id: uuidv4(),
    faq: "How do I contact StreamVibe customer support?",
    faqNum: "07",
  },
  {
    id: uuidv4(),
    faq: "What are the StreamVibe payment methods?",
    faqNum: "08",
  },
];
export default faq;
