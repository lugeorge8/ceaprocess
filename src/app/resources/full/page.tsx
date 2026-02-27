import { SiteHeader } from "@/components/site-header";

export default function ResourcesFullPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Resources (Full Reference)"
        subtitle="Full text from the uploaded document."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <h2>Insurance QRG 3.pptx (reimbursements)</h2>
            <p>
              https://bankofamerica-my.sharepoint.com.mcas.ms/:p:/g/personal/adrian_larios_ml_com/IQBgLKO4BIoaT5bX-pQN66pPARkAPLcqUhHaXxlnPTI4ot8?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&amp;wdhostclicktime=1772222296088&amp;web=1&amp;wdExp=TEAMS-TREATMENT
            </p>

            <h2>Identity Verification</h2>
            <p>
              https://bankofamerica-my.sharepoint.com/:b:/g/personal/mark_c_caubo_ml_com/IQCxgtS17xTxR6iWlaUnQpvMAUA_n-MybaShpTTftcFxHBc?e=YP7Hty
            </p>

            <h2>Merrill Lynch Education Savings Account Distribution Form</h2>
            <p>http://resourcecentral.bankofamerica.com/RetirementEducationPlanningDocuments/0873.pdf</p>

            <h2>Salesforce New Task</h2>
            <p>
              Assign to Kaitlyn Stern. Title: LexusNexxus (for nonworking numbers).
            </p>

            <h2>Street Request</h2>
            <p>
              Use Street Request.pdf when order quantity is less than minimum.
              http://intranet.bankofamerica.com/GWMSContactCenter/Documents/99%20Markets/Street%20Request.pdf
            </p>

            <h2>Low Balance Closeouts</h2>
            <p>
              http://intranet.bankofamerica.com/GWMSContactCenter/Documents/Margin%20and%20Monetary%20Approvals/Customer%20Accounting/Low%20Balance%20Close%20outs%20and%20Charge%20Offs.pdf
            </p>

            <h2>OMT Escalation Form</h2>
            <p>(No link provided in doc.)</p>

            <h2 id="hsa-guidelines">HSA Guidelines</h2>
            <p>
              <strong>Note:</strong> Merrill Lynch no longer offers Health Savings
              Accounts (HSA). Clients have the option to open a Bank of America
              (BofA) Health Benefit Solutions HSA.
            </p>

            <h3>Annual Limits</h3>
            <ul>
              <li>$4,400 for Single Coverage</li>
              <li>$8,750 for Family Coverage</li>
              <li>
                If you are 55 or older, your contribution limit is increased by
                another $1,000 (55 as of 12/13 of the current calendar year).
              </li>
            </ul>

            <h3>Monthly Limits</h3>
            <p>
              The annual contribution limit is divided into 12 monthly amounts,
              and for each month that you have an HDHP (as of the first of that
              month), you can contribute that monthly amount to an HSA.
            </p>

            <h3>Fees</h3>
            <ul>
              <li>$50 - Annual Custodial Fee</li>
              <li>$50 - Closeout/Transfer Out Fee</li>
            </ul>

            <h3>Withdrawals / Distributions</h3>
            <p>HSA/MSA Distribution Form</p>

            <h3>Contributions into Merrill HSAs</h3>
            <ul>
              <li>Complete via Check or Journal Entry (JE).</li>
              <li>FTS and Direct Deposits (DDS) are no longer accepted.</li>
            </ul>

            <h3>Transfers into Merrill HSAs</h3>
            <ul>
              <li>Transfers from outside HSAs are not allowed.</li>
              <li>Clients have the option to transfer into a BofA HSA.</li>
            </ul>

            <h3>Transfers out of Merrill</h3>
            <ul>
              <li>
                Merrill HSAs are eligible for transfers out via ATS Online (to
                ACAT &amp; Non-ACAT Firms).
              </li>
              <li>
                Prior to submitting: The funds being transferred must be fully
                liquidated and in cash as HSA transfers processed via ATS Online
                do not support in kind transfers.
              </li>
              <li>
                Transferring to an ACAT firm: The client works directly with the
                gaining firm to initiate the transfer request using the ACAT
                system. The gaining firm must initiate the transfer per Rule 412
                of the NYSE.
              </li>
              <li>
                Transferring to a non-ACAT firm: The client must establish an
                account with a contra firm, complete required transfer
                documentation (provided by the contra firm), contra firm mails
                paperwork to the Merrill Lynch Branch Office, submit transfer via
                ATS Online.
              </li>
            </ul>

            <h3>How to transfer a Merrill HSA to a BofA HSA</h3>
            <h4>Opening a BofA HSA account</h4>
            <p>
              Clients can apply online or call 1.800.992.3200 (Option #1 for
              Individual Accounts or Option #2 for Group Accounts) from 9 a.m. -
              6 p.m. Mon - Fri EST.
            </p>
            <p>
              Assistance with existing account (e.g., fee waiver): 1.866.791.0250
              (8 a.m. - 11 p.m. EST).
            </p>

            <h4>Online access</h4>
            <p>
              MyHealth app: Download the MyHealth BofA app. Select “New User? Set
              up your account” at the bottom of the login page.
            </p>

            <h4>Desktop access: enrollment code</h4>
            <ul>
              <li>
                If you have a code: select “I have a code” and follow the
                instructions.
              </li>
              <li>
                If no code: select “Get Started” and follow the instructions.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
