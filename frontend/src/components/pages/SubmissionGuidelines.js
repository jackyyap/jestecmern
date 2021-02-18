import React, { useContext, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  // const {userData} = useContext(UserContext);
  // const history = useHistory();

  // useEffect(() => {
  //   if (!userData.user) history.push("/login");
  // })

  return (
    <>
    <div class="container">
      <div class="card mt-5">
        <div class="card-header bg-info">
          <h5 class="mb-1 ml-4 text-light">Submission Guidelines</h5>
        </div>
        <div class="card-body py-4 px-5">
          <h5 class="text-success">Submit a Manuscript via Author Dashboard</h5>
          <div class="alert alert-info mb-4 px-4">
            <p>
              It is firstly required that the manuscript should be formatted according to JESTEC Template (MS-Word Version). Our review is double-blind, so based on JESTEC Template (for Blind Review), any information related to your identity must be removed. This includes the acknowledgment, appreciation, etc., if any.
            </p>
            <p>Prior to proceeding with the review process, you are kindly required to:</p>
            <ol class="ml-5">
              <li>Fill in and email us the JESTEC-Copyright transfer form.</li>
              <li>Email us your latest CV.</li>
              <li>Download the PPR excel file, fill in completely with the data required (e.g., email addresses, paper title, discipline, at least four potential reviewers with Ph.D. Degree as minimum requirement with their affiliations and valid e-mail addresses, etc.)</li>
              <li>Rename this file using this format PPR_Your Surname.xlsx and email it with your manuscript.</li>
            </ol>
            <p> Please read the Guidelines for Submission of Contributions.</p>
          
            <p>Alternatively, you can download the JESTEC Guidelines for author's submission file for more details.</p>
          </div>
          <h5 class="text-success">Guidelines for Submission of Contributions</h5>
          <div class="alert alert-info mb-4 px-4">
            <h5 class="lead text-success mt-2 mb-3">Preparation of Pre-Review Manuscript</h5>
            <p>Manuscripts, where appropriate, should contain these sections in the order: Title, Authors, Abstract, Keywords, Nomenclature, Introduction, Experimental Procedure, Theory, Results and Discussion, Conclusions, Acknowledgments (if any), References, Appendix (if any).</p>
            <p>The manuscript may consist of text, equations, symbols, figures, tables, line-drawings, and photographs. Pre-Review Manuscripts are to be typed and formatted according to JESTEC Template (MS-Word Version). The easiest and fastest way to do this, please follow these steps:</p>
            <ol class="ml-5">
              <li>Open your manuscript Word-file.</li>
              <li>Open JESTEC Template file.</li>
              <li>Select the Paste Options in JESTEC Template file: open Paste OptionàSet Default PasteàScroll down and select from the menu Cut, Copy, and PasteàPasting between documents when style conflictà select Use Destination Style (Default).</li>
              <li>Once done, all what you need after that is Copy from your file to JESTEC Template and save.</li>
            </ol>
            <p><strong>Figures</strong>: All figures must be of good quality and are cited in the text with Arabic numerals by writing “Fig. 1” or “Figs. 1 and 2”. If the word appears at the first of a sentence, it is to be spelled out as Figure 1 or Figures 1 and 2. Place the figure caption positioned below it (center aligned) as close as possible to their first mention in the text.</p>
            <p><strong>Equations</strong>: Use standard Microsoft Word Equation Editor to edit your equations. Do not embed "graphically designed" equations. Equations should be numbered consecutively in the paper and are cited in the text by writing “Eq. (1)” or “Eqs. (1) and (2). If the word occurs at the first of a sentence, it is to be spelled out as Equation (1) or Equations (1) and (2). Leave space of 6pt before and 6pt after the equation line to separate it from the text. The equation is to be aligned to the left on the line while its number using Arabic numerals enclosed in parentheses is to be aligned to the right.</p>
            <p><strong>Tables</strong>: Use standard Microsoft Word Equation Editor to edit your equations. Do not embed "graphically designed" tables. Tables should be numbered consecutively in the paper and must be cited in the text by writing “Table 1” or “Tables 1 and 2. Tables are to be placed as close as possible to their first mention in the text and they are centered-aligned with caption positioned above them.</p>
            <p><strong>Nomenclature</strong>: section is to be placed directly after the Conclusion section. It defines all the symbols (English and Greek), abbreviations, subscripts and superscripts used and arranged alphabetically. All standard symbols used in the text must be in italic mode and must be listed with their SI units in the Nomenclature.</p>
            <p><strong>Length</strong>: The preferable limit of the page number is between 10-15 pages.</p>
            <p><strong>Abstract and Keywords</strong>: On the first manuscript page, following the title and authors with their affiliations (name, title, organization, city, state, country, email), include a 100- to 200-word abstract summarizing your problem and findings. On a line below the abstract, include five keywords for indexing and database word searches.</p>
            <p><strong>References</strong>: All sources cited in the text must be included in the reference list, and vice versa. References are to be listed in the order cited in the text in Arabic numerals. Reference section to be as below:</p>
            <ol class="ml-5">
              <li>Journal Article</li>
              <p>Al-Atabi, M.T.; Chin, S.B.; and Luo, X.Y. (2005). Flow structures in tubes with segmental baffles. Journal of Flow Visualization and Image Processing, 45(2), 1412-1420.</p>
              <li>Journal Article in Press</li>
              <p>Al-Atabi, M.T.; Chin, S.B.; and Luo, X.Y. (in press). Flow visualization in tubes with segmental baffles. Journal of Visualization.</p>
              <li>Book</li>
              <p>Roberson, J.A.; and Crowe, C.T. (1997). Engineering fluid mechanics (6th ed.). New York: John Wiley and Sons Inc.</p>
              <li>Conference Paper</li>
              <p>Al-Atabi, M.T.; Chin, S.B.; and Luo, X.Y. (2004). An experimental study of the flow in an idealised human cystic duct. Proceedings of the First Asian Pacific Conference on Biomechanics. Osaka, Japan, 33-34.</p>
              <li>Internet Source</li>
              <p>Author, A.B. (2000). This is how to cite an internet reference. Retrieved October 5, 2000, from http://www.xauthorx.com.</p>
            </ol>
          </div>
          <div class="alert alert-info mb-4 px-4">
            <h5 class="lead text-success mt-2 mb-3">Submission of Pre-Review Manuscript</h5>
            <p>A soft copy of the manuscript to be submitted to the Executive Editor via email.</p>
          </div>
          <div class="alert alert-info mb-4 px-4">
            <h5 class="lead text-success mt-2 mb-3">Preparation and Submission of Post-Review Manuscript</h5>
            <p>After attending to all the referees’ comments and suggestions, submit a soft copy of the manuscript via email to the Executive Editor. The Post-Review Manuscript style should follow the provided “template of final paper”.</p>
          </div>
          <div class="alert alert-info mb-4 px-4">
            <h5 class="lead text-success mt-2 mb-3">Other Matters</h5>
            <p><strong>Proofs</strong>: The corresponding author will be mailed proofs for correction. These must be mailed back to the Editor-in-Chief.</p>
            <p><strong>Reprints</strong>: JESTEC is available for free online.</p>
            <p><strong>Copyright transfer</strong>: All the authors should sign the copyright transfer form and submit with the pre-view manuscript.</p>
            <p><strong>Review Policy</strong>: All contributions shall be subjected to double blind peer review by at least two experts in the field. The board of editors reserves the right to accept or reject any contribution. The decision about the acceptance of a contribution for publication is final. The board of editor shall do its best to ensure a quick refereeing process.</p>  
          </div>
          <h5 className="lead text-center" >In order to submit a manuscript, you need to be registered with a JESTEC account</h5>
        </div>
      </div>
    </div>
    </>
  )
}
