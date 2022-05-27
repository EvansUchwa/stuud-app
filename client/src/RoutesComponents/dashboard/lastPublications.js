import React from 'react'
import { Link } from 'react-router-dom';

export function DashLastPublications({ props }) {
    const { type } = props;

    function dispatchTitleAndKey() {
        return {
            title: type === "course" ? "Tes derniers cours publiés" :
                "Tes dernieres demande de cours publiés",
            key: "last publication " + type
        }
    }
    // published,onStage,onValidation
    return (
        <div className='dl-lastPublications'>

            <div className={'dllp-title ' + (type === 'course' ? "publishedStyle" : "askedStyle")}>
                <h2>{dispatchTitleAndKey().title}</h2>
                <Link to={type === "course" ? "/Course/add" : "/Course-request/add"}>
                    <i className='mdi mdi-plus'></i>
                </Link>
            </div>
            <section className='dllp-publications'>
                {
                    [0, 0, 0].map((lastc, i) => <article key={dispatchTitleAndKey().key + i}
                        className={"courseCard2 " + (type === 'course' ? "publishedStyle" : "askedStyle")}>
                        <span >
                            <i className='mdi mdi-book'></i>
                        </span>
                        <p>Nom du cours</p>

                        <p>12 nov 2022</p>

                        <b className='published'>Publié</b>

                        <button>Voir</button>
                    </article>)
                }
            </section>
        </div>
    )
}

