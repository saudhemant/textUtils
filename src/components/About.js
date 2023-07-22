import React, { useState } from 'react'


export default function About() {
    const lightMode = {
        backgroundColor: '#F8F9FA',
        color: '#212529',
        borderColor: '#212529'
    }
    const darkMode = {
        backgroundColor: '#212529',
        color: '#F8F9FA' ,
        borderColor: '#F8F9FA'
    }
    const [isDark, setDark] = useState(true);
    const [style, setStyle] = useState(lightMode);
    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggler = (event) => {
        setDark(!isDark);
        setStyle(isDark ? darkMode : lightMode);
        if(isDark) {
            setBtnText('Enable Light Mode');
        } else {
            setBtnText('Enable Dark Mode');
        }

        const classes = ['btn-dark', 'btn-light'];
        classes.forEach(className => {
            event.target.classList.toggle(className);
        });
    }

  return (
    <>
    <div className="container rounded mt-3 py-2 px-3" style={ style }>
        <h1 className="display-1">About Us</h1>
        <div className="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button type="button" className="accordion-button" style={ style } data-bs-toggle="collapse" data-bs-target="#accordion1">
                        Item #1
                    </button>
                </h2>
                <div className="collapse accordion-collapse" id="accordion1">
                    <div className="accordion-body" style={ style }>
                        This is the item #1 <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni amet voluptates maxime animi in, optio odio beatae soluta enim fugiat distinctio! Fuga tempora iusto, praesentium earum asperiores ea architecto mollitia sit ipsum id porro, reprehenderit, sequi distinctio voluptatibus in doloribus illum laudantium. Blanditiis molestias quod neque nihil recusandae sed?
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header rounded">
                    <button type="button" className="accordion-button" style={ style } data-bs-toggle="collapse" data-bs-target="#accordion2">
                        Item #2
                    </button>
                </h2>
                <div className="collapse accordion-collapse" id="accordion2">
                    <div className="accordion-body" style={ style }>
                        This is the item #2 <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sit ratione accusamus rem similique possimus officia temporibus alias reiciendis facere expedita fugiat dolor vitae rerum, eos explicabo, repudiandae, odio est eaque. Voluptatem beatae voluptate, modi repellat fuga hic sit dolorum voluptas rerum reprehenderit pariatur et accusantium architecto, error praesentium laborum!
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header rounded-down">
                    <button type="button" className="accordion-button rounded-down" style={ style } data-bs-toggle="collapse" data-bs-target="#accordion3">
                        Item #3
                    </button>
                </h2>
                <div className="collapse accordion-collapse" id="accordion3">
                    <div className="accordion-body" style={ style }>
                        This is the item #3 <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio fuga autem fugiat, sapiente molestiae animi consectetur saepe, nulla natus in aperiam obcaecati similique, quo itaque cum ducimus dolore inventore quasi eius perferendis suscipit aliquid iure. Architecto, fugiat odio! Quo veritatis suscipit itaque a, tempore doloribus ipsum amet molestiae consequuntur quas?
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-dark mt-3" onClick={ toggler }>
            { btnText }
        </button>
    </div>
    </>
  )
}
