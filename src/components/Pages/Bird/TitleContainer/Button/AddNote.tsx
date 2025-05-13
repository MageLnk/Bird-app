import { useState } from 'react';
// Styles
import styles from './AddNote.module.scss';
// Types & Interfaces
import type { MouseEvent } from 'react';
// App
export const AddNote = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOut = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  console.log('isOpen', isOpen);

  return (
    <div className={styles.addNote}>
      <button onClick={handleOpen}>Add note</button>

      {isOpen && (
        <div className={styles.bg__addNote} onClick={handleOpen}>
          <div onClick={handleClickOut} className={styles.addNote__modalContainer}>
            <div className={styles.modalContainer__top}>
              <p className={styles.top__title}>Add a note</p>
              <div className={styles.top__closeModal} onClick={handleOpen}>
                <p>X</p>
              </div>
            </div>

            <label className={styles.modalContainer__location}>
              <p>Location</p>
              <input type="text" placeholder="Where did you spot it?" />
            </label>

            <label className={styles.modalContainer__notes}>
              <p>Location</p>
              <textarea placeholder="Enter your notes here" rows={4} />
            </label>

            <div className={styles.modalContainer__buttons}>
              <button className={styles.buttons__cancel} onClick={handleOpen}>
                Cancel
              </button>
              <button className={styles.buttons__addNote}>Add note</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
