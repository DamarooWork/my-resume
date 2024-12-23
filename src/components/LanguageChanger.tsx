import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const lngs: ILngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
}

export default function LanguageChanger() {
  const [isSelectOpen, setSelectOpen] = useState(false)
  const { i18n } = useTranslation()

  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng)
    setSelectOpen(false)
  }
  return (
    <div className="flex flex-col">
      <img
        className="cursor-pointer max-w-20"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVR4nO2Yb2gSYRzHHyJ6Eb3qfS+uV70MerFe9aIXriB602K2RkG9qhcjrbVm5a2iNgpjM3ChbLRZsdpi6Gq4/sxFC605lbQcaYORMtZmtzUcuJBf3KN3ifPK03s8hfvCD+6ee/P93H2/dz4ipEiRIkUVKdq5sK1+KO7ebWFSlGkVCp0x/yz4ZiJSTcwbCncEg8EtogHUg3GXGOPcGJxRKQGAHRZCNIDYO8/N6eFFyQF8M+F50QDFmGenpneFAEAEygZAoAdQdgASPUDlBCDRA1ROADE9qGvS4SkrgGogAZzY41J6UCcHQOdUkgdgjwvtAWe20PGRAvj6M8UDRJhUwT2oCABVJj4sRDgDUpsnRmK/Bz1DI9j0yZYb4A6EyEWIi889TxIPqy6BGAn14LV7GloN9+HhyFj63OWBY1o9Bui3Och2gIvPoacJPKy+CcRI6HvA3e3jzW0w+s4NZ6/dwecsFNESc/H5/isFOzNrcytpoANPEgV/D7yhMFzpNGPTak36zp/S3YRJb5AsABcfi3+dXzP71vGa0ZMU1YMPn77AiYvX+cI+GB4l/xrNfvvkSihG+XrAlrTFYMLGjzZdTj8JrZ7vBBGA7I+XkA7miVFuD8Y/euEMfRubrtdehUcvXsEts5V/EnqjBd77gtIDcPGxBv7Gh5u+QDpG7Fvpfz3Q3e3GRhub28A2PsmvsxFquEDja5r2LukBuPg02tc2mGywreFrs3lilNuDtx4/aDuM8MY9vcHkxJQfLhm64dnLCbI/JeTYHyA5AaTYHyA5AaTYHyA5AaTYJyM5AaToAZIboJQeeEORqOwAJfUgFG6XHaDIHsSK/mvxX2b29DC/z9kXVKiSRQmY39vLJM8/n69BlS4qj/l9fUyi1bG4C1WDqBzz+/uZZa0jugNVi6gs87XWpR8ax/J2VE2iMuYPP16ao+2xrajaRJlW4chA/DPthM2oGqUejLtogE1y+1CkSJEiVNH6AztokNiuhRbbAAAAAElFTkSuQmCC"
        alt="language"
        onClick={() => setSelectOpen((prev) => !prev)}
      ></img>
      {isSelectOpen &&
        Object.keys(lngs).map((lng: string) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => handleChangeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
    </div>
  )
}
