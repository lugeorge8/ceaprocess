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
          {/* Word-doc-like formatting (bold labels + underlined subheads) */}
          <div className="space-y-7 text-sm leading-6 text-slate-800">
            <div>
              <div className="text-base font-semibold">HSA Guidelines:</div>
              <div className="mt-2">
                <span className="font-semibold">Note:</span> Merrill Lynch no
                longer offers Health Savings Accounts (HSA). Clients have the
                option to open a Bank of America (BofA) Health Benefit Solutions
                HSA
              </div>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Annual Limits
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>$4,400 for Single Coverage</li>
                <li>$8,750 for Family Coverage</li>
                <li>
                  Note: If you are 55 or older, you contribution limit is
                  increased by another $1,000
                </li>
                <li>55 as of 12/13 of the current calendar year</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Monthly Limits
              </div>
              <div className="mt-2">
                The annual contribution limit is divided into 12 monthly amounts,
                and for each month that you have an HDHP (as of the first of that
                month), you can contribute that monthly amount to an HSA.
              </div>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">Fees</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>$50 - Annual Custodial Fee</li>
                <li>$50 - Closeout/Transfer Out Fee</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Withdrawals/Distributions:
              </div>
              <div className="mt-2">HSA/MSA Distribution Form</div>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Contributions into Merrill HSAs:
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Complete via Check or Journal Entry (JE).</li>
                <li>FTS and Direct Deposits (DDS) are no longer accepted.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Transfers into Merrill HSAs:
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Transfers from outside HSAs are not allowed.</li>
                <li>Clients have the option to transfer into a BofA HSA.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                Transfers out of Merrill:
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
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
                  <ul className="mt-2 list-disc space-y-1 pl-5">
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
            </div>

            <div>
              <div className="font-semibold underline underline-offset-2">
                How to transfer a Merrill HSA to a Bofa HSA
              </div>

              <div className="mt-3 font-semibold">Opening a Bofa HSA Account</div>
              <div className="mt-1">
                Clients requesting to open a Bank of America Health Savings
                Account can apply online or contact by phone: 1.800.992.3200 Option
                #1 for Individual Accounts or Option #2 for Group Accounts from 9
                a.m. - 6 p.m. Mon - Fri EST.
              </div>
              <div className="mt-2">
                Clients requiring assistance with an existing account, such as a
                fee waiver on an existing Bank of America Health Savings Account,
                please contact: 1.866.791.0250. Service representatives are
                available 8 a.m. - 11 p.m. EST.
              </div>

              <div className="mt-4 font-semibold">
                Online Access to Health and Benefits Accounts: MyHealth app
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Download the MyHealth BofA app.</li>
                <li>
                  Then select &quot;New User? Set up your account&quot; at the bottom of the
                  login page and follow the on-screen instructions.
                </li>
              </ul>

              <div className="mt-4 font-semibold">
                Desktop Access: Did your employer provide an enrollment code?
              </div>
              <div className="mt-1">
                If you enrolled in your account through your employer&apos;s benefit
                plan, there are two options for new users depending upon whether
                your employer provided you with an enrollment code or not.
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
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
