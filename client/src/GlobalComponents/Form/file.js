import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form";
import { useState } from "react";
export const InputFile = ({ props }) => {
    const { name, maxFiles, label, formValues, setFormValues, width, height } = props;
    const [files, setFiles] = useState([])

    function handleFileFieldChange(e) {
        const value = e.target.files[0];
        const name = e.target.name;

        const copyFiles = [...files];
        copyFiles.push(value)
        setFiles(copyFiles)
        if (maxFiles == 1) {
            setFormValues({ ...formValues, [name]: value })
        } else {
            setFormValues({ ...formValues, [name]: copyFiles })
        }
    }
    function handleFileDelete(fileId) {
        const copyFiles = [...files];
        copyFiles.splice(fileId, 1)
        setFiles(copyFiles)
        if (maxFiles == 1) {
            setFormValues({ ...formValues, [name]: '' })
        } else {
            setFormValues({ ...formValues, [name]: copyFiles })
        }
        // console.log(copyFiles)
    }
    const fileLabelStyle = { width, height, lineHeight: width }

    return <div className="formSegmentFile">
        <label>
            {label}
        </label>
        <section className="fsf-filesListAndAddBtn">
            {
                (files.length + 1) <= maxFiles ? <label
                    htmlFor={"cf-" + (files.length + 1)}
                    style={fileLabelStyle}
                >
                    <input type={"file"} name={name}
                        id={"cf-" + (files.length + 1)}
                        onChange={(event) => handleFileFieldChange(event)} />
                    <span>
                        +
                    </span>
                </label> : null
            }

            {

                files.map((ff, idx) => <p className={''}
                    key={'file field nb' + idx}
                    style={fileLabelStyle}
                >
                    {
                        ff.name.split('.').pop()
                    }
                    <i className='mdi mdi-close'
                        onClick={() => handleFileDelete(idx)}>
                    </i>
                    <span>
                        {ff.name}
                    </span>
                </p>)
            }
        </section>

    </div>
}