import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form";
import { useState } from "react";
export const InputTags = ({ props }) => {
    const { name, maxTags, label, formValues, setFormValues } = props;
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const [tagAddOnProcess, setTagAddOnProgress] = useState(false);

    function addTag() {
        setTagAddOnProgress(false)
        const copyTags = [...tags];
        copyTags.push(tag)
        setTags(copyTags)

        // console.log(copyTags)
    }

    function removeTag(tagId) {
        const copyTags = [...tags];
        copyTags.splice(tagId, 1)
        setTags(copyTags)
    }
    return <div className="formSegmentTags">
        <label>
            {label}
        </label>
        {
            !tagAddOnProcess && (tags.length + 1) <= maxTags &&
            <span className="tagAddBtn" onClick={() => setTagAddOnProgress(true)}>Ajouter un tag</span>
        }
        {
            tagAddOnProcess && <section className="fst-form">
                <input type={"text"} placeholder="Matiere,Hashtags,etc...."
                    onChange={(event) => setTag(event.target.value)} />
                <div>
                    <span className="tagAddBtn" onClick={() => addTag()}>Ajouter le tag</span>
                    <span className="tagReturnBtn" onClick={() => setTagAddOnProgress(false)}>Annuler</span>
                </div>
            </section>
        }
        <section className="fst-list">
            {
                tags.map((tg, idx) => <p className={''}
                    key={'tag field nb' + idx}>
                    {tg}
                    <i className="mdi mdi-close"
                        onClick={() => removeTag(idx)}></i>
                </p>)
            }
        </section>
    </div>
}