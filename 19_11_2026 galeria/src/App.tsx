import 'bootstrap/dist/css/bootstrap.css'
import {useMemo, useState} from "react";
import {initialPhotos, CATEGORY_LABELS} from './data/photos.js'

const CATEGORY_ORDER = [1, 2, 3]
const buildImageSrc = (filename) => new URL(`./assets/${filename}`, import.meta.url).href

function App() {
const [Photos, setPhotos] = useState(initialPhotos);
const [ActiveCategories, setActiveCategories] = useState({1: true, 2: true, 3: true})
  const visiblePhotos = useMemo(
      () => Photos.filter((photo) => ActiveCategories[photo.category]),
      [Photos, ActiveCategories],
      )

  const ToggleCategory = (category) => {
    setActiveCategories((current) => ({...current, [category]: !current[category]}))
  }

  const incrementDownloads = (id) => {
  setPhotos((current) => current.map((photo) =>
      (photo.id === id ? {...photo, downloads: photo.downloads + 1} : photo)))
  }
  return (
      <div className="App">
        <>
          <h1>Kategorie zdjęć</h1>
          <div className="row mb-4">
            {CATEGORY_ORDER.map((category) => {
              const switchId = `category-${category}`
              return(
                  <div className="col-3 col-md-1" key={category}>
                    <div className="d-flex">
                      <div className={'form-check form-switch m-0'}>
                        <input id={switchId} type={'checkbox'} className={'form-check-input'} role={'switch'}
                               checked={ActiveCategories[category]} onChange={() =>ToggleCategory(category)}/>
                        <label className={'form-check-label'} htmlFor={switchId}>
                          {CATEGORY_LABELS[category]}
                        </label>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
          <div className={'container mt-4'}>
            <div className="row g-3">
              {visiblePhotos.map((photo) => (
                  <div className={'col-4'} key={photo.id}>
                    <img className={'card-img-top photo-img'} src={buildImageSrc(photo.filename)} alt={photo.name} />
                    <h4 className={'text-muted mb-3'}>Pobrań: {photo.downloads}</h4>
                    <button className={'btn btn-success'} onClick={() => incrementDownloads(photo.id)}>Pobierz</button>
                  </div>
              ))}
            </div>
          </div>


        </>
      </div>
  )
}

export default App
