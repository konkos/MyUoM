import { Link, ListItem, Text } from "@chakra-ui/react";

export default function StudentIdInfo() {
  return (
    <>
      <Text fontSize="md">
        Μπορείτε να ζητήσετε ακαδημαϊκή ταυτότητα από την διεύθυνση{" "}
        <Link href="https://academicid.minedu.gov.gr/" color="teal.500">
          https://academicid.minedu.gov.gr/
        </Link>
        .
      </Text>
      <br></br>
      <ListItem>
        Στην δεξιά στήλη, επάνω, έχει κουμπί Εγγραφή/Εισοδος. Πατήστε εκεί.
      </ListItem>
      <ListItem>
        Στην είσοδο, επιλέξτε προπτυχιακός φοιτητής και χρησιμοποιήστε το
        username του email του uom.edu.gr και τον κωδικό που μας δώσανε.
      </ListItem>
      <ListItem>
        Στην επόμενη οθόνη έχει μια σύνοψη τι θα σταλεί στην υπηρεσία:
        Ακαδημαϊκή Ταυτότητα. Εάν είστ ΟΚ πατήστε Αποδοχή. Αν όχι, επικοινωνήστε
        με γραμματεία.
      </ListItem>
      <ListItem>Διαβάστε τους όρους και πατήστε αποδοχή.</ListItem>
      <ListItem>
        Θα σας στείλουν στο mail σας, ένα επιβεβαιωτικό μήνυμα. Πατήστε επάνω
        στο σύνδεσμο που περιέχει για να επιβεβαιώσετε ότι είστε εσείς.
      </ListItem>
      <ListItem>
        Στη συνεχεια τσεκάρετε τα στοιχεία σας{" "}
        <b>(ως μήνα εισαγωγής οι περισσότεροι βάλαμε Οκτώβριο)</b>, εισάγετε και
        την φωτογραφία για την ακαδημαϊκή ταυτότητα.
      </ListItem>
      <ListItem>
        Δηλώνετε από που θέλετε να τσιμπίσετε την ταυτότητά σας.
      </ListItem>
      <ListItem>
        Μην ξεχάσετε να κάνετε υποβολή. Όταν κάνετε υποβολή, θα πάρετε ένα
        αριθμό καταχώρησης. Καλό είναι να τον σημειώσετε. Θα στείλει και στο
        mail ότι το λάβανε.
      </ListItem>
      <br></br>
      <Text fontSize="md">
        Μπορούμε να ζητήσουμε την ακαδημαϊκή ταυτότητα που χρησιμεύει και ως
        πάσο για το λεωφορείο. Επίσης να πάτε να αλλάξετε το τηλέφωνό σας σε
        φοιτητικό.
      </Text>
      <br></br>
      <Text noOfLines={[1, 2, 3]} fontSize="md">
        Τέλος πρέπει να δηλώσουμε τα μαθήματα στην διεύθυνση{" "}
        <Link
          href="https://services.uom.gr/unistudent/login.asp"
          color="teal.500"
        >
          Υπηρεσία StudentsWeb.
        </Link>
      </Text>
    </>
  );
}
