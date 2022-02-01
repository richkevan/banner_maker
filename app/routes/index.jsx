import { useState } from "react";
import Modal from "~/components/modal/modal";
import ColorPicker from "~/components/colorpicker/colorpicker";
import AddPicture from "~/components/add-picture/add-picture";
import ImageSearch from "~/components/imagesearch/imagesearch";
import styles from "~/styles/canvas.css";


export function links() {
  return [{rel:"stylesheet", href:styles}]
}

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("background");
  const [modalContent, setModalContent] = useState("");
  
  
  
  const SetToolbar = (e) => {
    setMenu(e.target.value);
  }
  const AddPhoto = () => {
    setModalContent(ImageSearch)
    setShowModal(!showModal)
  }
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="aside">
      <h1>Banner Maker</h1>
      </div>
    </div>
  );
}
