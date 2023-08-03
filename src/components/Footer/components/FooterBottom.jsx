import React from 'react'

const FooterBottom = () => {

    const footerLists = [
        {
            id:1,
            title: "Company Info",
            items: [
                {
                    id:1,
                    title:"About Us",
                    path: "/"
                },
                {
                    id:2,
                    title:"Carrier",
                    path: "/"
                },
                {
                    id:3,
                    title:"We are hiring",
                    path: "/"
                },
                {
                    id:4,
                    title:"Blog",
                    path: "/"
                },
            ]
        },
        {
            id:2,
            title: "Features",
            items: [
                {
                    id:1,
                    title:"Business Marketing",
                    path: "/"
                },
                {
                    id:2,
                    title:"Live Chat",
                    path: "/"
                },
                {
                    id:3,
                    title:"User Analytic",
                    path: "/"
                },
                {
                    id:4,
                    title:"Unlimited Support",
                    path: "/"
                },
            ]
        },
        {
            id:3,
            title: "Resources",
            items: [
                {
                    id:1,
                    title:"IOS & Android",
                    path: "/"
                },
                {
                    id:2,
                    title:"Watch a Demo",
                    path: "/"
                },
                {
                    id:3,
                    title:"Customers",
                    path: "/"
                },
                {
                    id:4,
                    title:"API",
                    path: "/"
                },
            ]
        },
    ]


  return (
    <div className="footer-row-bottom">
        <div className="footer-row-bottom-col-left">
            {footerLists.map(list =>(
            <div key={list.id} className="footer-row-bottom-col-left-group">
            <strong className="footer-row-bottom-col-left-group-title">
                {list.title}
            </strong>
            <ul className="footer-row-bottom-col-left-group-list">
                {list.items.map(item => (
                <li className="footer-row-bottom-col-left-list-item">
                    <a key={item.id} href={item.path}>
                        {item.title}
                    </a>
                </li>
                ))}
            </ul>
            </div>
                        ))}
        </div>
        <div className="footer-row-bottom-col-right">
            <div className="footer-row-bottom-col-right-subscribe">
                <strong className="footer-row-bottom-col-right-subscribe-title">
                Get In Touch
                </strong>
                <div className="footer-row-bottom-col-right-subscribe-form">
                    <input placeholder='Your Email' type="text" className='footer-row-bottom-col-right-subscribe-form-input' />
                    <button className="footer-row-bottom-col-right-subscribe-form-button">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom
