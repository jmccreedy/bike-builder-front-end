export interface Part {
  id:               ID;
  part_description: ID;
  part_features:    ID;
  part_img:         ID;
  part_price:       ID;
  part_title:       ID;
  part_type:        ID;
  part_url:         ID;
}

export interface ID {
  S: string;
}

export interface DisplayData {
  imgUrl:      string;
  description: string;
  features:    string;
}

export interface PartFormData {
  frame: Part;
  groupset: Part;
  handlebar: Part;
  saddle: Part;
  seatpost: Part;
  stem: Part;
  tyres: Part;
  wheelset: Part;
}
