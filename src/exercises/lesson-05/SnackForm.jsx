import styles from './SnackForm.module.css';
import { useState, useEffect, useRef } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });
  const nameRef = useRef();
  const ratingRef = useRef();

  useEffect(() => {
    setTouched({ name: false, rating: false }); // reset when switching between add/edit

    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      if (touched.rating) {
        console.log('BAASDD');
      }
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
    }
  }

  function validateName() {
    return name.trim().length > 0;
  }

  function validateRating() {
    return rating.length > 0;
  }

  function getNameError() {
    if (!validateName() && touched.name) return 'Snack name is required';
  }

  function getRatingError() {
    if (!validateRating() && touched.rating) return 'Please select a rating';
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
        {!validateName() && touched.name && (
          <div className={styles.error}>{getNameError()}</div>
        )}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          ref={ratingRef}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {!validateRating() && touched.rating && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
