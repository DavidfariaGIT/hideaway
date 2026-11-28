import InfoSection from "@/components/InfoSection";

export default function about() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-15 bg-g xl:px-40 3xl:px-140">
      <div className="bg-gray-200/80 rounded-2xl">
      <InfoSection title={"About us"}>
        Hideaway is an archive vintage fashion store the strives to build a
        community around the love for fashion and its impact on the world we
        live in. Founded in 2026 by john doe and his long time friend will smith
        together they have a vision of building brand that repersents them
      </InfoSection>
      <InfoSection title={"FAQ"}>
        Do we ship internationally, yes we do.
        <br /><br />
        What does "archive fashion"
        mean? Past-season pieces from designers and labels, often from limited
        runs that are no longer in production.
        <br /><br />
        How do you verify that items
        are authentic? Every item is inspected by our in-house team and ships
        with a certificate of authenticity. 
        <br /><br />
        How is condition described, and
        can I see more photos? Items are graded A to C with all flaws noted, and
        you can message us anytime for extra photos or measurements. 
        <br /><br />
        What is your return policy? All sales are final unless an item arrives not as
        described, in which case you can return it within 7 days of delivery for
        a full refund.
      </InfoSection>
      <InfoSection title={"Policy"}>
        All items sold on our site are authentic, pre-owned or deadstock archive pieces, inspected and graded by our team before listing. Because each piece is one of a kind, all sales are final unless an item arrives not as described, in which case you may contact us within 7 days of delivery for a return and full refund. Vintage sizing often differs from modern sizing, so please review the measurements in each listing carefully before purchasing.
      </InfoSection>
      </div>
    </main>
  )
}
