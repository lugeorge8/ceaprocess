import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function HsaGuidelinesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="HSA Guidelines"
        subtitle="Reference: Merrill Health Savings Accounts (HSA) guidelines."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <h2>HSA Guidelines</h2>

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
                Note: If you are 55 or older, you contribution limit is
                increased by another $1,000
              </li>
              <li>55 as of 12/13 of the current calendar year</li>
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

            <h3>Withdrawals/Distributions:</h3>
            <p>HSA/MSA Distribution Form</p>

            <h3>Contributions into Merrill HSAs:</h3>
            <ul>
              <li>Complete via Check or Journal Entry (JE).</li>
              <li>FTS and Direct Deposits (DDS) are no longer accepted.</li>
            </ul>

            <h3>Transfers into Merrill HSAs:</h3>
            <ul>
              <li>Transfers from outside HSAs are not allowed.</li>
              <li>Clients have the option to transfer into a BofA HSA.</li>
            </ul>

            <h3>Transfers out of Merrill:</h3>
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
                of the NYSE. See the more information link below for a list of
                ACAT eligible firms and contra-firm contact information.
              </li>
              <li>Eligible ACAT Firms &amp; Contact Information</li>
              <li>
                Transferring to a non-ACAT firm:
                <ul>
                  <li>The client must establish an account with a contra firm.</li>
                  <li>
                    Complete required transfer documentation (Provided by the
                    contra firm).
                  </li>
                  <li>
                    Contra firm will mail the paperwork to the Merrill Lynch
                    Branch Office for submission of the transfer.
                  </li>
                  <li>Submit the transfer via ATS Online.</li>
                  <li>Full Deliver to a Non ACAT Firm</li>
                </ul>
              </li>
              <li>
                Note: When transferring to a Bank of America Health Benefit
                Solutions HSA, use appropriate paperwork below.
              </li>
            </ul>

            <h3>How to transfer a Merrill HSA to a Bofa HSA</h3>

            <h4>Opening a Bofa HSA Account</h4>
            <p>
              Clients requesting to open a Bank of America Health Savings
              Account can apply online or contact by phone: 1.800.992.3200 Option
              #1 for Individual Accounts or Option #2 for Group Accounts from 9
              a.m. - 6 p.m. Mon - Fri EST.
            </p>
            <p>
              Clients requiring assistance with an existing account, such as a
              fee waiver on an existing Bank of America Health Savings Account,
              please contact: 1.866.791.0250. Service representatives are
              available 8 a.m. - 11 p.m. EST.
            </p>

            <h4>Online Access to Health and Benefits Accounts: MyHealth app</h4>
            <ul>
              <li>Download the MyHealth BofA app.</li>
              <li>
                Then select &quot;New User? Set up your account&quot; at the bottom of the
                login page and follow the on-screen instructions.
              </li>
            </ul>

            <h4>Desktop Access: Did your employer provide an enrollment code?</h4>
            <p>
              If you enrolled in your account through your employer&apos;s benefit
              plan, there are two options for new users depending upon whether
              your employer provided you with an enrollment code or not.
            </p>
            <ul>
              <li>
                Yes - Select the &quot;I have a code&quot; link in the New Users section,
                and follow the on screen instructions to complete your
                registration.
              </li>
              <li>
                No - Select &quot;Get Started&quot; in the New Users section, and follow
                the on screen instructions.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/resources"
              className="text-sm font-semibold text-[#0aa6a6] underline"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
