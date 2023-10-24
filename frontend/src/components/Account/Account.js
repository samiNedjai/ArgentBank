import React from"react";import"./account.css";let Account=({accountType:t,accountNumber:c,amount:n,description:o})=><div >

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">
            Argent Bank {t} ({c})
          </h3>
          <p className="account-amount">{n}</p>
          <p className="account-amount-description">{o}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>;export default Account;