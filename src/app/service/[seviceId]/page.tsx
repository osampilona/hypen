import Accordion from "@/components/Accordion/Accordion";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
const ServicePage = () => {
  return (
    <main>
      <h1>Service page</h1>
      <Accordion title="Timeslot Details">
        <TimeSlotSelector categoryName="Service Time Slots" />
      </Accordion>
    </main>
  );
};
export default ServicePage;
